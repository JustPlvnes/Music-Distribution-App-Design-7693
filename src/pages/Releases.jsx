import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ReleaseCard from '../components/ReleaseCard';

const { FiSearch, FiFilter, FiPlus } = FiIcons;

const Releases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const releases = [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'John Doe',
      artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      releaseDate: '2024-01-15',
      status: 'live',
      streams: 145000,
      platforms: ['Spotify', 'Apple Music', 'YouTube Music']
    },
    {
      id: 2,
      title: 'Electric Nights',
      artist: 'John Doe',
      artwork: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      releaseDate: '2024-02-20',
      status: 'processing',
      streams: 0,
      platforms: ['Spotify', 'Apple Music']
    },
    {
      id: 3,
      title: 'Summer Vibes',
      artist: 'John Doe',
      artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      releaseDate: '2024-03-10',
      status: 'scheduled',
      streams: 0,
      platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Deezer']
    }
  ];

  const filteredReleases = releases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || release.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Releases</h1>
            <p className="text-gray-300">Manage and track your music releases across all platforms.</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
            <SafeIcon icon={FiPlus} />
            <span>New Release</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search releases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-700 border border-purple-500/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="relative">
            <SafeIcon icon={FiFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-dark-700 border border-purple-500/30 rounded-lg pl-10 pr-8 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none"
            >
              <option value="all">All Status</option>
              <option value="live">Live</option>
              <option value="processing">Processing</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Releases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReleases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>

      {filteredReleases.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <SafeIcon icon={FiSearch} className="text-6xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No releases found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Releases;