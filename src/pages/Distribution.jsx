import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PlatformCard from '../components/PlatformCard';

const { FiShare2, FiCheck, FiClock, FiX } = FiIcons;

const Distribution = () => {
  const platforms = [
    {
      name: 'Spotify',
      logo: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=100&h=100&fit=crop',
      status: 'connected',
      releases: 24,
      streams: '1.2M',
      revenue: '$3,240'
    },
    {
      name: 'Apple Music',
      logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=100&fit=crop',
      status: 'connected',
      releases: 20,
      streams: '856K',
      revenue: '$2,180'
    },
    {
      name: 'YouTube Music',
      logo: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=100&h=100&fit=crop',
      status: 'pending',
      releases: 15,
      streams: '423K',
      revenue: '$1,120'
    },
    {
      name: 'Amazon Music',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop',
      status: 'disconnected',
      releases: 0,
      streams: '0',
      revenue: '$0'
    }
  ];

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

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Distribution</h1>
        <p className="text-gray-300">Manage your music distribution across all platforms.</p>
      </div>

      {/* Distribution Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <SafeIcon icon={FiShare2} className="text-purple-400 text-xl" />
            <h3 className="text-white font-semibold">Total Platforms</h3>
          </div>
          <p className="text-3xl font-bold text-white">150+</p>
          <p className="text-gray-300 text-sm">Available platforms</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <SafeIcon icon={FiCheck} className="text-green-400 text-xl" />
            <h3 className="text-white font-semibold">Connected</h3>
          </div>
          <p className="text-3xl font-bold text-white">12</p>
          <p className="text-gray-300 text-sm">Active connections</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <SafeIcon icon={FiClock} className="text-yellow-400 text-xl" />
            <h3 className="text-white font-semibold">Processing</h3>
          </div>
          <p className="text-3xl font-bold text-white">3</p>
          <p className="text-gray-300 text-sm">Pending approvals</p>
        </motion.div>
      </div>

      {/* Platform Management */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Platform Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} platform={platform} />
          ))}
        </div>
      </div>

      {/* Add New Platform */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center"
      >
        <SafeIcon icon={FiShare2} className="text-purple-400 text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Add More Platforms</h3>
        <p className="text-gray-300 mb-6">Expand your reach by connecting to additional streaming platforms.</p>
        <button className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Browse Platforms
        </button>
      </motion.div>
    </div>
  );
};

export default Distribution;