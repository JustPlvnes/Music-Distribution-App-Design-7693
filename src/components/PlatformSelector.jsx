import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowLeft } = FiIcons;

const PlatformSelector = ({ onNext, onBack }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const platforms = [
    { id: 'spotify', name: 'Spotify', logo: '🎵', popular: true },
    { id: 'apple', name: 'Apple Music', logo: '🍎', popular: true },
    { id: 'youtube', name: 'YouTube Music', logo: '📺', popular: true },
    { id: 'amazon', name: 'Amazon Music', logo: '📦', popular: false },
    { id: 'deezer', name: 'Deezer', logo: '🎧', popular: false },
    { id: 'tidal', name: 'Tidal', logo: '🌊', popular: false },
    { id: 'pandora', name: 'Pandora', logo: '📻', popular: false },
    { id: 'soundcloud', name: 'SoundCloud', logo: '☁️', popular: false }
  ];

  const togglePlatform = (platformId) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const selectAll = () => {
    setSelectedPlatforms(platforms.map(p => p.id));
  };

  const selectPopular = () => {
    setSelectedPlatforms(platforms.filter(p => p.popular).map(p => p.id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Select Distribution Platforms</h2>
        <div className="flex space-x-2">
          <button
            onClick={selectPopular}
            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
          >
            Popular Only
          </button>
          <button
            onClick={selectAll}
            className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
          >
            Select All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((platform) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedPlatforms.includes(platform.id)
                ? 'border-purple-500 bg-purple-500/20'
                : 'border-purple-500/30 bg-dark-700/50 hover:border-purple-500/50'
            }`}
            onClick={() => togglePlatform(platform.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{platform.logo}</span>
                <div>
                  <h3 className="text-white font-medium">{platform.name}</h3>
                  {platform.popular && (
                    <span className="text-xs text-purple-400">Popular</span>
                  )}
                </div>
              </div>
              {selectedPlatforms.includes(platform.id) && (
                <SafeIcon icon={FiCheck} className="text-purple-400" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-gray-400">
        <p>{selectedPlatforms.length} platforms selected</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-6 py-3 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/20 transition-colors"
        >
          <SafeIcon icon={FiArrowLeft} />
          <span>Back</span>
        </button>
        <button
          onClick={onNext}
          disabled={selectedPlatforms.length === 0}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-primary-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          Review & Submit
        </button>
      </div>
    </div>
  );
};

export default PlatformSelector;