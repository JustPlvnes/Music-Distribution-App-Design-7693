import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMusic, FiTrendingUp, FiEye } = FiIcons;

const RecentReleases = () => {
  const releases = [
    {
      title: 'Midnight Dreams',
      streams: '145K',
      trend: '+12%',
      artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'
    },
    {
      title: 'Electric Nights',
      streams: '89K',
      trend: '+8%',
      artwork: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop'
    },
    {
      title: 'Summer Vibes',
      streams: '67K',
      trend: '+15%',
      artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Releases</h2>
        <SafeIcon icon={FiEye} className="text-purple-400" />
      </div>
      
      <div className="space-y-4">
        {releases.map((release, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={release.artwork}
              alt={release.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-medium">{release.title}</h3>
              <p className="text-gray-400 text-sm">{release.streams} streams</p>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiTrendingUp} className="text-green-400 text-sm" />
              <span className="text-green-400 text-sm">{release.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentReleases;