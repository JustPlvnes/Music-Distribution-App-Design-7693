import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import StatsCard from '../components/StatsCard';
import RecentReleases from '../components/RecentReleases';
import EarningsChart from '../components/EarningsChart';

const { FiTrendingUp, FiMusic, FiDollarSign, FiUsers } = FiIcons;

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Streams',
      value: '2.4M',
      change: '+12.5%',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-primary-500'
    },
    {
      title: 'Active Releases',
      value: '24',
      change: '+3',
      icon: FiMusic,
      color: 'from-primary-500 to-purple-500'
    },
    {
      title: 'Total Earnings',
      value: '$8,420',
      change: '+18.2%',
      icon: FiDollarSign,
      color: 'from-purple-600 to-primary-400'
    },
    {
      title: 'Monthly Listeners',
      value: '145K',
      change: '+24.1%',
      icon: FiUsers,
      color: 'from-primary-600 to-purple-400'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-300">Welcome back! Here's what's happening with your music.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        <RecentReleases />
      </div>
    </div>
  );
};

export default Dashboard;