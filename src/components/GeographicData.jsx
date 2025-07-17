import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin } = FiIcons;

const GeographicData = () => {
  const countries = [
    { name: 'United States', listeners: 45000, flag: '🇺🇸' },
    { name: 'United Kingdom', listeners: 28000, flag: '🇬🇧' },
    { name: 'Germany', listeners: 22000, flag: '🇩🇪' },
    { name: 'Canada', listeners: 18000, flag: '🇨🇦' },
    { name: 'Australia', listeners: 15000, flag: '🇦🇺' },
    { name: 'France', listeners: 12000, flag: '🇫🇷' }
  ];

  const maxListeners = Math.max(...countries.map(c => c.listeners));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Geographic Distribution</h2>
        <SafeIcon icon={FiMapPin} className="text-purple-400" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {countries.map((country, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-3 p-3 rounded-lg bg-dark-700/50"
          >
            <span className="text-2xl">{country.flag}</span>
            <div className="flex-1">
              <h3 className="text-white font-medium">{country.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex-1 bg-dark-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(country.listeners / maxListeners) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full"
                  />
                </div>
                <span className="text-gray-400 text-sm">{country.listeners.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GeographicData;