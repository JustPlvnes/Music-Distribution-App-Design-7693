import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';

const { FiUser, FiMail, FiPhone, FiMapPin, FiCamera, FiSave } = FiIcons;

const Profile = () => {
  const { user, userRole } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+1 (555) 123-4567',
    location: 'Los Angeles, CA',
    bio: 'Independent artist passionate about creating meaningful music that connects with people.',
    genre: 'Electronic',
    website: 'https://example.com',
    social: {
      instagram: '@example',
      twitter: '@example',
      facebook: 'examplemusic'
    }
  });

  // Load user data from Supabase user
  useEffect(() => {
    if (user) {
      setFormData(prevData => ({
        ...prevData,
        name: user.user_metadata?.name || '',
        email: user.email || '',
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social.')) {
      const socialField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        social: { ...prev.social, [socialField]: value }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile updated:', formData);
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
          <p className="text-gray-300">Manage your artist profile and account settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
            >
              <div className="text-center">
                <div className="relative mx-auto mb-4">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full flex items-center justify-center mx-auto">
                    <SafeIcon icon={FiUser} className="text-white text-4xl" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors">
                    <SafeIcon icon={FiCamera} />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{formData.name}</h3>
                <p className="text-gray-300">{userRole || 'Artist'}</p>
              </div>
            </motion.div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <SafeIcon icon={FiUser} className="inline mr-2" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <SafeIcon icon={FiMail} className="inline mr-2" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <SafeIcon icon={FiPhone} className="inline mr-2" /> Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <SafeIcon icon={FiMapPin} className="inline mr-2" /> Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="Electronic">Electronic</option>
                      <option value="Pop">Pop</option>
                      <option value="Rock">Rock</option>
                      <option value="Hip-Hop">Hip-Hop</option>
                      <option value="R&B">R&B</option>
                      <option value="Country">Country</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Classical">Classical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Instagram</label>
                      <input
                        type="text"
                        name="social.instagram"
                        value={formData.social.instagram}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Twitter</label>
                      <input
                        type="text"
                        name="social.twitter"
                        value={formData.social.twitter}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Facebook</label>
                      <input
                        type="text"
                        name="social.facebook"
                        value={formData.social.facebook}
                        onChange={handleInputChange}
                        className="w-full bg-dark-700 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-primary-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiSave} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;