import React from 'react';
import { Wallet } from 'lucide-react';

const Header = () => {
  return (
    <div className="card text-center">
      <div className="flex" style={{ justifyContent: 'center', marginBottom: '8px' }}>
        <Wallet size={32} color="#667eea" />
        <h1 className="text-2xl font-bold" style={{ marginLeft: '12px' }}>
          Expense Tracker
        </h1>
      </div>
      <p className="text-gray">
        Track your expenses and manage your finances with ease
      </p>
    </div>
  );
};

export default Header; 