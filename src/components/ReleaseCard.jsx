import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiEdit, FiBarChart, FiMoreVertical } = FiIcons;

const ReleaseCard = ({ release }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'live':
        return 'bg-green-500/20 text-green-400';
      case 'processing':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'scheduled':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={release.artwork}
              alt={release.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <button className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <SafeIcon icon={FiPlay} className="text-white" />
            </button>
          </div>
          <div>
            <h3 className="text-white font-semibold">{release.title}</h3>
            <p className="text-gray-400 text-sm">{release.artist}</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(release.status)}`}>
              {release.status}
            </span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <SafeIcon icon={FiMoreVertical} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Release Date:</span>
          <span className="text-white">{new Date(release.releaseDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Streams:</span>
          <span className="text-white">{formatNumber(release.streams)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Platforms:</span>
          <span className="text-white">{release.platforms.length}</span>
        </div>
      </div>

      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-purple-500/20 text-purple-400 py-2 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center justify-center space-x-2">
          <SafeIcon icon={FiEdit} />
          <span>Edit</span>
        </button>
        <button className="flex-1 bg-primary-500/20 text-primary-400 py-2 rounded-lg hover:bg-primary-500/30 transition-colors flex items-center justify-center space-x-2">
          <SafeIcon icon={FiBarChart} />
          <span>Analytics</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ReleaseCard;