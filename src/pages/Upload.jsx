import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import UploadForm from '../components/UploadForm';
import PlatformSelector from '../components/PlatformSelector';

const { FiUpload, FiCheckCircle, FiMusic } = FiIcons;

const Upload = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: 'Upload Music', icon: FiUpload },
    { id: 2, title: 'Select Platforms', icon: FiMusic },
    { id: 3, title: 'Review & Submit', icon: FiCheckCircle }
  ];

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Upload Music</h1>
          <p className="text-gray-300">Share your music with the world across all major platforms.</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-gradient-to-r from-purple-500 to-primary-500 text-white' 
                    : 'bg-dark-700 text-gray-400'
                }`}>
                  <SafeIcon icon={step.icon} className="text-lg" />
                </div>
                <span className={`ml-3 font-medium ${
                  currentStep >= step.id ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-purple-500' : 'bg-dark-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
        >
          {currentStep === 1 && (
            <UploadForm onNext={() => setCurrentStep(2)} />
          )}
          {currentStep === 2 && (
            <PlatformSelector 
              onNext={() => setCurrentStep(3)} 
              onBack={() => setCurrentStep(1)} 
            />
          )}
          {currentStep === 3 && (
            <div className="text-center">
              <SafeIcon icon={FiCheckCircle} className="text-6xl text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Distribute!</h2>
              <p className="text-gray-300 mb-8">Your music will be distributed to all selected platforms within 24-48 hours.</p>
              <div className="flex space-x-4 justify-center">
                <button 
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  Upload Another
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-primary-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Submit for Distribution
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Upload;