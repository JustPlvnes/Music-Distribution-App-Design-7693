import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign } = FiIcons;

const EarningsChart = () => {
  const data = [
    { month: 'Jan', earnings: 420 },
    { month: 'Feb', earnings: 680 },
    { month: 'Mar', earnings: 920 },
    { month: 'Apr', earnings: 1240 },
    { month: 'May', earnings: 1680 },
    { month: 'Jun', earnings: 2100 }
  ];

  const maxEarnings = Math.max(...data.map(d => d.earnings));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Earnings Overview</h2>
        <SafeIcon icon={FiDollarSign} className="text-purple-400" />
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm w-8">{item.month}</span>
            <div className="flex-1 bg-dark-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.earnings / maxEarnings) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-2 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full"
              />
            </div>
            <span className="text-white text-sm font-medium">${item.earnings}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EarningsChart;