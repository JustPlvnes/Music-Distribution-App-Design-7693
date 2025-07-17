import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUpload, FiMusic, FiImage, FiCalendar } = FiIcons;

const UploadForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    releaseDate: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Upload Your Music</h2>
      
      {/* File Upload Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-dashed border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors">
          <SafeIcon icon={FiMusic} className="text-4xl text-purple-400 mx-auto mb-4" />
          <h3 className="text-white font-medium mb-2">Audio File</h3>
          <p className="text-gray-400 text-sm mb-4">Upload your music file (MP3, WAV, FLAC)</p>
          <button type="button" className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors">
            Choose File
          </button>
        </div>
        
        <div className="border-2 border-dashed border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors">
          <SafeIcon icon={FiImage} className="text-4xl text-purple-400 mx-auto mb-4" />
          <h3 className="text-white font-medium mb-2">Artwork</h3>
          <p className="text-gray-400 text-sm mb-4">Upload cover art (3000x3000px recommended)</p>
          <button type="button" className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors">
            Choose Image
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Track Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Artist Name</label>
          <input
            type="text"
            value={formData.artist}
            onChange={(e) => setFormData({...formData, artist: e.target.value})}
            className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
          <select
            value={formData.genre}
            onChange={(e) => setFormData({...formData, genre: e.target.value})}
            className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            required
          >
            <option value="">Select Genre</option>
            <option value="electronic">Electronic</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="r&b">R&B</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Release Date</label>
          <input
            type="date"
            value={formData.releaseDate}
            onChange={(e) => setFormData({...formData, releaseDate: e.target.value})}
            className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows="4"
          className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
          placeholder="Tell us about your track..."
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Next: Select Platforms
        </button>
      </div>
    </form>
  );
};

export default UploadForm;