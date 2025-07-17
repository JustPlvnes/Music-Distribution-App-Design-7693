import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiClock, FiDownload } = FiIcons;

const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      date: '2024-01-15',
      amount: '$1,240.50',
      status: 'completed',
      method: 'PayPal'
    },
    {
      id: 2,
      date: '2024-01-01',
      amount: '$980.30',
      status: 'completed',
      method: 'Bank Transfer'
    },
    {
      id: 3,
      date: '2023-12-15',
      amount: '$1,560.80',
      status: 'completed',
      method: 'PayPal'
    },
    {
      id: 4,
      date: '2023-12-01',
      amount: '$720.40',
      status: 'pending',
      method: 'Bank Transfer'
    }
  ];

  const getStatusIcon = (status) => {
    return status === 'completed' ? FiCheck : FiClock;
  };

  const getStatusColor = (status) => {
    return status === 'completed' ? 'text-green-400' : 'text-yellow-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Payment History</h2>
        <SafeIcon icon={FiDownload} className="text-purple-400" />
      </div>
      
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <SafeIcon 
                icon={getStatusIcon(payment.status)} 
                className={`text-lg ${getStatusColor(payment.status)}`} 
              />
              <div>
                <p className="text-white font-medium">{payment.amount}</p>
                <p className="text-gray-400 text-sm">{payment.method}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">{new Date(payment.date).toLocaleDateString()}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                payment.status === 'completed' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {payment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PaymentHistory;