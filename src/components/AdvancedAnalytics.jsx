import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiBarChart2, FiUsers, FiGlobe } = FiIcons;

const AdvancedAnalytics = () => {
  const performanceData = {
    streams: [
      { platform: 'Spotify', count: 1250000, growth: '+15%' },
      { platform: 'Apple Music', count: 850000, growth: '+12%' },
      { platform: 'YouTube Music', count: 650000, growth: '+18%' },
      { platform: 'Amazon Music', count: 450000, growth: '+10%' }
    ],
    demographics: [
      { age: '18-24', percentage: 35 },
      { age: '25-34', percentage: 28 },
      { age: '35-44', percentage: 20 },
      { age: '45-54', percentage: 12 },
      { age: '55+', percentage: 5 }
    ],
    topCountries: [
      { country: 'United States', listeners: 450000, flag: '🇺🇸' },
      { country: 'United Kingdom', listeners: 280000, flag: '🇬🇧' },
      { country: 'Germany', listeners: 220000, flag: '🇩🇪' },
      { country: 'Canada', listeners: 180000, flag: '🇨🇦' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Platform Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Platform Performance</h2>
          <SafeIcon icon={FiBarChart2} className="text-purple-400" />
        </div>
        <div className="space-y-4">
          {performanceData.streams.map((platform, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiTrendingUp} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{platform.platform}</h3>
                  <p className="text-gray-400 text-sm">
                    {platform.count.toLocaleString()} streams
                  </p>
                </div>
              </div>
              <span className="text-green-400">{platform.growth}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Demographics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Audience Demographics</h2>
          <SafeIcon icon={FiUsers} className="text-purple-400" />
        </div>
        <div className="space-y-4">
          {performanceData.demographics.map((group, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{group.age}</span>
                <span className="text-white">{group.percentage}%</span>
              </div>
              <div className="h-2 bg-dark-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${group.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Geographic Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Geographic Distribution</h2>
          <SafeIcon icon={FiGlobe} className="text-purple-400" />
        </div>
        <div className="space-y-4">
          {performanceData.topCountries.map((country, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-2xl">{country.flag}</span>
              <div className="flex-1">
                <h3 className="text-white font-medium">{country.country}</h3>
                <p className="text-gray-400 text-sm">
                  {country.listeners.toLocaleString()} monthly listeners
                </p>
              </div>
              <div className="w-24 h-2 bg-dark-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedAnalytics;