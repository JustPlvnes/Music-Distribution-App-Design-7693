import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign } = FiIcons;

const RoyaltyChart = () => {
  const data = [
    { month: 'Jan', amount: 420 },
    { month: 'Feb', amount: 680 },
    { month: 'Mar', amount: 920 },
    { month: 'Apr', amount: 1240 },
    { month: 'May', amount: 1680 },
    { month: 'Jun', amount: 2100 }
  ];

  const maxAmount = Math.max(...data.map(d => d.amount));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Royalty Trends</h2>
        <SafeIcon icon={FiDollarSign} className="text-purple-400" />
      </div>
      
      <div className="flex items-end justify-between h-48 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(item.amount / maxAmount) * 100}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="w-full bg-gradient-to-t from-green-500 to-primary-500 rounded-t-lg min-h-[4px]"
            />
            <span className="text-gray-400 text-xs mt-2">{item.month}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm">Monthly royalty earnings</p>
      </div>
    </motion.div>
  );
};

export default RoyaltyChart;