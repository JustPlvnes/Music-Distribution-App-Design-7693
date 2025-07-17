import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ROLES } from './contexts/AuthContext';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Releases from './pages/Releases';
import Analytics from './pages/Analytics';
import Distribution from './pages/Distribution';
import Royalties from './pages/Royalties';
import Profile from './pages/Profile';
import Landing from './pages/Landing';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-purple-900 to-primary-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-purple-900 to-primary-900">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/app/dashboard" /> : <Landing />} />
          <Route path="/auth" element={isAuthenticated ? <Navigate to="/app/dashboard" /> : <Auth />} />
          <Route
            path="/app/*"
            element={
              <ProtectedRoute>
                <div className="flex h-screen overflow-hidden">
                  <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <Navbar onMenuClick={() => setSidebarOpen(true)} />
                    <main className="flex-1 overflow-y-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Routes>
                          <Route path="dashboard" element={<Dashboard />} />
                          <Route
                            path="upload"
                            element={
                              <ProtectedRoute
                                roles={[ROLES.ARTIST, ROLES.MANAGER]}
                                permissions={['upload_music']}
                              >
                                <Upload />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="releases"
                            element={
                              <ProtectedRoute permissions={['view_releases']}>
                                <Releases />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="analytics"
                            element={
                              <ProtectedRoute permissions={['view_analytics']}>
                                <Analytics />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="distribution"
                            element={
                              <ProtectedRoute
                                roles={[ROLES.ARTIST, ROLES.MANAGER]}
                                permissions={['manage_releases']}
                              >
                                <Distribution />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="royalties"
                            element={
                              <ProtectedRoute permissions={['view_analytics']}>
                                <Royalties />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="profile"
                            element={
                              <ProtectedRoute permissions={['manage_profile']}>
                                <Profile />
                              </ProtectedRoute>
                            }
                          />
                        </Routes>
                      </motion.div>
                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;