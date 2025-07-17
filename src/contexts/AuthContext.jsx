import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, getUserRole } from '../lib/supabase';

const AuthContext = createContext(null);

export const ROLES = {
  ADMIN: 'admin',
  ARTIST: 'artist',
  MANAGER: 'manager',
  VIEWER: 'viewer'
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: {
    label: 'Administrator',
    description: 'Full system access and user management',
    permissions: ['manage_users', 'manage_roles', 'view_analytics', 'manage_content', 'manage_payments']
  },
  [ROLES.ARTIST]: {
    label: 'Artist',
    description: 'Music upload and distribution management',
    permissions: ['upload_music', 'manage_releases', 'view_analytics', 'manage_profile']
  },
  [ROLES.MANAGER]: {
    label: 'Manager',
    description: 'Artist management and content oversight',
    permissions: ['manage_artists', 'view_analytics', 'manage_releases']
  },
  [ROLES.VIEWER]: {
    label: 'Viewer',
    description: 'Limited view-only access',
    permissions: ['view_releases', 'view_basic_analytics']
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Update user and role when auth state changes
  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error fetching session:', error);
          setLoading(false);
          return;
        }
        
        if (data?.session?.user) {
          const role = getUserRole(data.session.user);
          setUser(data.session.user);
          setUserRole(role);
        }
      } catch (error) {
        console.error('Session fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          const role = getUserRole(session.user);
          setUser(session.user);
          setUserRole(role);
        } else {
          setUser(null);
          setUserRole(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const hasPermission = (permission) => {
    if (!userRole) return false;
    return ROLE_PERMISSIONS[userRole]?.permissions.includes(permission) || false;
  };

  const hasRole = (roles) => {
    if (!userRole) return false;
    return Array.isArray(roles) ? roles.includes(userRole) : userRole === roles;
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      // If this is a successful login, set the user and role
      if (data?.user) {
        const role = getUserRole(data.user);
        setUserRole(role);
      }
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      
      // For demo/development purposes only
      if (process.env.NODE_ENV !== 'production') {
        const mockUser = {
          id: 'demo-user',
          email,
          user_metadata: { name: 'Demo User', role: ROLES.ARTIST },
        };
        setUser(mockUser);
        setUserRole(ROLES.ARTIST);
        return { user: mockUser };
      }
      
      throw error;
    }
  };

  const signup = async (email, password, userData) => {
    try {
      // Default role for new users is ARTIST
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            ...userData, 
            role: ROLES.ARTIST 
          },
        },
      });
      
      if (error) throw error;
      
      // New users are automatically assigned the ARTIST role
      if (data?.user) {
        setUserRole(ROLES.ARTIST);
      }
      
      return data;
    } catch (error) {
      console.error('Signup error:', error);
      
      // For demo/development purposes only
      if (process.env.NODE_ENV !== 'production') {
        const mockUser = {
          id: 'demo-user',
          email,
          user_metadata: { ...userData, role: ROLES.ARTIST },
        };
        setUser(mockUser);
        setUserRole(ROLES.ARTIST);
        return { user: mockUser };
      }
      
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.warn('Logout error:', error);
    } finally {
      setUser(null);
      setUserRole(null);
    }
  };

  const updateUserRole = async (userId, newRole) => {
    // Only admins can update roles
    if (!hasRole(ROLES.ADMIN)) {
      throw new Error('Unauthorized: Only administrators can update user roles');
    }

    try {
      // In a real app, you would update the user's role in the database
      // For now, we'll just log this action
      console.log(`Admin action: Updating user ${userId} role to ${newRole}`);
      
      // In a real implementation, you would update the user's metadata in Supabase
      // const { data, error } = await supabase.auth.admin.updateUserById(userId, {
      //   user_metadata: { role: newRole }
      // });
      
      return true;
    } catch (error) {
      console.error('Error updating user role:', error);
      throw error;
    }
  };

  const value = {
    user,
    userRole,
    loading,
    login,
    signup,
    logout,
    hasPermission,
    hasRole,
    updateUserRole,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};