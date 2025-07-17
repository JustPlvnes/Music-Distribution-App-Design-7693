import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, roles = [], permissions = [] }) => {
  const { user, isAuthenticated, hasRole, hasPermission } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (roles.length > 0 && !hasRole(roles)) {
    return <Navigate to="/app/dashboard" replace />;
  }

  if (permissions.length > 0 && !permissions.every(hasPermission)) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;