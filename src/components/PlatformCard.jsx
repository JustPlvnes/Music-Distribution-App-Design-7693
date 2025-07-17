import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiClock, FiX, FiSettings } = FiIcons;

const PlatformCard = ({ platform }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected':
        return FiCheck;
      case 'pending':
        return FiClock;
      default:
        return FiX;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      default:
        return 'text-red-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'connected':
        return 'bg-green-500/20';
      case 'pending':
        return 'bg-yellow-500/20';
      default:
        return 'bg-red-500/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={platform.logo}
            alt={platform.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-white font-semibold">{platform.name}</h3>
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${getStatusBg(platform.status)}`}>
              <SafeIcon icon={getStatusIcon(platform.status)} className={`text-sm ${getStatusColor(platform.status)}`} />
              <span className={`text-sm font-medium ${getStatusColor(platform.status)}`}>
                {platform.status}
              </span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <SafeIcon icon={FiSettings} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Releases:</span>
          <span className="text-white">{platform.releases}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Streams:</span>
          <span className="text-white">{platform.streams}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Revenue:</span>
          <span className="text-white">{platform.revenue}</span>
        </div>
      </div>

      <div className="mt-4">
        {platform.status === 'connected' ? (
          <button className="w-full bg-red-500/20 text-red-400 py-2 rounded-lg hover:bg-red-500/30 transition-colors">
            Disconnect
          </button>
        ) : platform.status === 'pending' ? (
          <button className="w-full bg-yellow-500/20 text-yellow-400 py-2 rounded-lg cursor-not-allowed">
            Pending Approval
          </button>
        ) : (
          <button className="w-full bg-gradient-to-r from-purple-500 to-primary-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
            Connect
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default PlatformCard;