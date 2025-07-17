import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiMenu, FiBell, FiSearch, FiUser, FiLogOut } = FiIcons;

const Navbar = ({ onMenuClick }) => {
  const { user, logout, userRole } = useAuth();
  
  // Get user name from metadata or use email as fallback
  const userName = user?.user_metadata?.name || user?.email || 'User';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800/90 backdrop-blur-sm border-b border-purple-500/20 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
          >
            <SafeIcon icon={FiMenu} className="text-white text-xl" />
          </button>
          <div className="relative">
            <SafeIcon
              icon={FiSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search music, artists, releases..."
              className="bg-dark-700 border border-purple-500/30 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-purple-500/20 transition-colors">
            <SafeIcon icon={FiBell} className="text-white text-xl" />
            <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="flex flex-col items-end">
              <span className="text-white font-medium">{userName}</span>
              <span className="text-gray-400 text-sm capitalize">{userRole || 'User'}</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiUser} className="text-white text-sm" />
            </div>
            <button
              onClick={logout}
              className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
            >
              <SafeIcon icon={FiLogOut} className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;