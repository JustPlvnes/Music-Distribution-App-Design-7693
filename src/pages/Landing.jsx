import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMusic, FiPlay, FiTrendingUp, FiUsers, FiGlobe, FiArrowRight } = FiIcons;

const Landing = () => {
  const features = [
    {
      icon: FiMusic,
      title: 'Multi-Platform Distribution',
      description: 'Distribute your music to Spotify, Apple Music, YouTube Music, and 150+ other platforms instantly.'
    },
    {
      icon: FiTrendingUp,
      title: 'Real-Time Analytics',
      description: 'Track your performance with detailed analytics and insights across all platforms.'
    },
    {
      icon: FiUsers,
      title: 'Audience Insights',
      description: 'Understand your listeners with demographic data and geographic distribution.'
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Reach millions of listeners worldwide with our extensive distribution network.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Platforms' },
    { number: '50M+', label: 'Monthly Listeners' },
    { number: '200K+', label: 'Artists' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-purple-900 to-primary-900">
      {/* Navigation */}
      <nav className="bg-dark-800/90 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-primary-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMusic} className="text-white text-lg" />
              </div>
              <span className="text-white font-bold text-xl">Vision Media 345</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/auth"
                className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Distribute Your Music
                <span className="block bg-gradient-to-r from-purple-400 to-primary-400 bg-clip-text text-transparent">
                  To The World
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get your music on Spotify, Apple Music, YouTube Music, and 150+ other platforms. 
                Track your performance and grow your audience with powerful analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/auth"
                  className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <span>Start Distributing</span>
                  <SafeIcon icon={FiArrowRight} />
                </Link>
                <button className="border border-purple-500/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/20 transition-colors flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiPlay} />
                  <span>Watch Demo</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From distribution to analytics, we provide all the tools you need to grow your music career.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/50 to-primary-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Share Your Music?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of artists who trust Vision Media 345 to distribute their music worldwide.
            </p>
            <Link
              to="/auth"
              className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-800/90 border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-primary-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMusic} className="text-white text-lg" />
              </div>
              <span className="text-white font-bold text-xl">Vision Media 345</span>
            </div>
            <div className="text-gray-400">
              © 2024 Vision Media 345. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;