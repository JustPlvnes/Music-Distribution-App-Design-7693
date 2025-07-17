import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth, ROLES } from '../contexts/AuthContext';

const { FiHome, FiUpload, FiMusic, FiBarChart3, FiShare2, FiDollarSign, FiUser, FiX } = FiIcons;

const Sidebar = ({ isOpen, onClose, currentPage, setCurrentPage }) => {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome, path: '/app/dashboard', roles: [ROLES.ADMIN, ROLES.ARTIST, ROLES.MANAGER] },
    { id: 'upload', label: 'Upload Music', icon: FiUpload, path: '/app/upload', roles: [ROLES.ARTIST, ROLES.MANAGER] },
    { id: 'releases', label: 'My Releases', icon: FiMusic, path: '/app/releases', roles: [ROLES.ADMIN, ROLES.ARTIST, ROLES.MANAGER] },
    { id: 'analytics', label: 'Analytics', icon: FiBarChart3, path: '/app/analytics', roles: [ROLES.ADMIN, ROLES.ARTIST, ROLES.MANAGER] },
    { id: 'distribution', label: 'Distribution', icon: FiShare2, path: '/app/distribution', roles: [ROLES.ARTIST, ROLES.MANAGER] },
    { id: 'royalties', label: 'Royalties', icon: FiDollarSign, path: '/app/royalties', roles: [ROLES.ADMIN, ROLES.ARTIST, ROLES.MANAGER] },
    { id: 'profile', label: 'Profile', icon: FiUser, path: '/app/profile', roles: [ROLES.ADMIN, ROLES.ARTIST, ROLES.MANAGER] },
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user?.role || ROLES.ARTIST)
  );

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed lg:relative lg:translate-x-0 w-64 h-full bg-dark-800/95 backdrop-blur-sm border-r border-purple-500/20 z-50 lg:z-0"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-primary-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMusic} className="text-white text-lg" />
              </div>
              <span className="text-white font-bold text-xl">Vision Media 345</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
            >
              <SafeIcon icon={FiX} className="text-white" />
            </button>
          </div>

          <nav className="space-y-2">
            {filteredMenuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setCurrentPage(item.id);
                    onClose();
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-primary-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-purple-500/20 hover:text-white'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;