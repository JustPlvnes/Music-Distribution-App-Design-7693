import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp } = FiIcons;

const AnalyticsChart = () => {
  const data = [
    { day: 'Mon', streams: 1200 },
    { day: 'Tue', streams: 1800 },
    { day: 'Wed', streams: 1600 },
    { day: 'Thu', streams: 2200 },
    { day: 'Fri', streams: 2800 },
    { day: 'Sat', streams: 3200 },
    { day: 'Sun', streams: 2400 }
  ];

  const maxStreams = Math.max(...data.map(d => d.streams));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Stream Analytics</h2>
        <SafeIcon icon={FiTrendingUp} className="text-purple-400" />
      </div>
      
      <div className="flex items-end justify-between h-48 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(item.streams / maxStreams) * 100}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="w-full bg-gradient-to-t from-purple-500 to-primary-500 rounded-t-lg min-h-[4px]"
            />
            <span className="text-gray-400 text-xs mt-2">{item.day}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm">Weekly streaming performance</p>
      </div>
    </motion.div>
  );
};

export default AnalyticsChart;