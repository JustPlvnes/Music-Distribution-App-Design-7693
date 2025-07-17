import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import RoyaltyChart from '../components/RoyaltyChart';
import PaymentHistory from '../components/PaymentHistory';

const { FiDollarSign, FiTrendingUp, FiCalendar, FiDownload } = FiIcons;

const Royalties = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const royaltyStats = [
    {
      title: 'Total Earnings',
      value: '$8,420.50',
      change: '+18.2%',
      icon: FiDollarSign,
      color: 'from-purple-500 to-primary-500'
    },
    {
      title: 'This Month',
      value: '$1,240.30',
      change: '+12.5%',
      icon: FiTrendingUp,
      color: 'from-primary-500 to-purple-500'
    },
    {
      title: 'Pending',
      value: '$420.80',
      change: '+5.2%',
      icon: FiCalendar,
      color: 'from-purple-600 to-primary-400'
    },
    {
      title: 'Available',
      value: '$7,999.70',
      change: '+22.1%',
      icon: FiDownload,
      color: 'from-primary-600 to-purple-400'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Royalties</h1>
            <p className="text-gray-300">Track your earnings and manage payments.</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
            <SafeIcon icon={FiDownload} />
            <span>Request Payout</span>
          </button>
        </div>
      </div>

      {/* Royalty Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {royaltyStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="text-white text-xl" />
              </div>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-gray-300 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts and History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RoyaltyChart />
        <PaymentHistory />
      </div>
    </div>
  );
};

export default Royalties;