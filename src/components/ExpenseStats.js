import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { format } from 'date-fns';

const ExpenseStats = ({ expenses }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  const thisMonthExpenses = expenses
    .filter(expense => {
      const expenseDate = new Date(expense.date);
      const now = new Date();
      return expenseDate.getMonth() === now.getMonth() && 
             expenseDate.getFullYear() === now.getFullYear();
    })
    .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  const topCategory = Object.entries(categoryTotals)
    .sort(([,a], [,b]) => b - a)[0];

  return (
    <div className="grid grid-3">
      <div className="card text-center">
        <div className="flex" style={{ justifyContent: 'center', marginBottom: '8px' }}>
          <DollarSign size={24} color="#667eea" />
        </div>
        <h3 className="text-lg font-bold">Total Expenses</h3>
        <p className="text-2xl font-bold text-red">₹{totalExpenses.toFixed(2)}</p>
        <p className="text-gray text-sm">All time</p>
      </div>

      <div className="card text-center">
        <div className="flex" style={{ justifyContent: 'center', marginBottom: '8px' }}>
          <TrendingUp size={24} color="#40c057" />
        </div>
        <h3 className="text-lg font-bold">This Month</h3>
        <p className="text-2xl font-bold text-red">₹{thisMonthExpenses.toFixed(2)}</p>
        <p className="text-gray text-sm">{format(new Date(), 'MMMM yyyy')}</p>
      </div>

      <div className="card text-center">
        <div className="flex" style={{ justifyContent: 'center', marginBottom: '8px' }}>
          <TrendingDown size={24} color="#ff6b6b" />
        </div>
        <h3 className="text-lg font-bold">Top Category</h3>
        <p className="text-xl font-bold text-gray">
          {topCategory ? topCategory[0] : 'None'}
        </p>
        <p className="text-gray text-sm">
          {topCategory ? `₹${topCategory[1].toFixed(2)}` : 'No expenses yet'}
        </p>
      </div>
    </div>
  );
};

export default ExpenseStats; 