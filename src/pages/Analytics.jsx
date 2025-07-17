import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AnalyticsChart from '../components/AnalyticsChart';
import PlatformStats from '../components/PlatformStats';
import GeographicData from '../components/GeographicData';
import AdvancedAnalytics from '../components/AdvancedAnalytics';

const { FiTrendingUp, FiCalendar } = FiIcons;

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'advanced', label: 'Advanced Analytics' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
            <p className="text-gray-300">Track your music performance across all platforms.</p>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="text-gray-400" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-primary-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-purple-500/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'overview' ? (
        <>
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Streams', value: '2.4M', change: '+12.5%' },
              { title: 'Revenue', value: '$8,420', change: '+18.2%' },
              { title: 'Listeners', value: '145K', change: '+24.1%' },
              { title: 'Conversion Rate', value: '3.2%', change: '+0.8%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-300 text-sm font-medium">{stat.title}</h3>
                  <SafeIcon icon={FiTrendingUp} className="text-green-400" />
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-green-400 text-sm">{stat.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <AnalyticsChart />
            <PlatformStats />
          </div>

          {/* Geographic Data */}
          <GeographicData />
        </>
      ) : (
        <AdvancedAnalytics />
      )}
    </div>
  );
};

export default Analytics;