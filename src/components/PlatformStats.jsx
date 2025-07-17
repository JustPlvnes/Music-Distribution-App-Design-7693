import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShare2 } = FiIcons;

const PlatformStats = () => {
  const platforms = [
    { name: 'Spotify', streams: 45, color: 'from-green-500 to-green-400' },
    { name: 'Apple Music', streams: 25, color: 'from-gray-500 to-gray-400' },
    { name: 'YouTube Music', streams: 20, color: 'from-red-500 to-red-400' },
    { name: 'Amazon Music', streams: 10, color: 'from-blue-500 to-blue-400' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Platform Distribution</h2>
        <SafeIcon icon={FiShare2} className="text-purple-400" />
      </div>
      
      <div className="space-y-4">
        {platforms.map((platform, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="text-white text-sm w-20">{platform.name}</span>
            <div className="flex-1 bg-dark-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${platform.streams}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`h-3 bg-gradient-to-r ${platform.color} rounded-full`}
              />
            </div>
            <span className="text-gray-400 text-sm">{platform.streams}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformStats;