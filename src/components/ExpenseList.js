import React, { useState } from 'react';
import { Trash2, Edit, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const categories = [
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Healthcare',
    'Education',
    'Utilities',
    'Other'
  ];

  const handleEdit = (expense) => {
    setEditingId(expense.id);
    setEditForm({
      description: expense.description,
      amount: expense.amount,
      category: expense.category
    });
  };

  const handleSave = (id) => {
    if (!editForm.description.trim() || !editForm.amount) {
      alert('Please fill in all fields');
      return;
    }

    if (parseFloat(editForm.amount) <= 0) {
      alert('Amount must be greater than 0');
      return;
    }

    onEditExpense(id, {
      description: editForm.description.trim(),
      amount: parseFloat(editForm.amount).toFixed(2),
      category: editForm.category
    });

    setEditingId(null);
    setEditForm({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Food': '#ff6b6b',
      'Transportation': '#4ecdc4',
      'Entertainment': '#45b7d1',
      'Shopping': '#96ceb4',
      'Healthcare': '#feca57',
      'Education': '#ff9ff3',
      'Utilities': '#54a0ff',
      'Other': '#5f27cd'
    };
    return colors[category] || '#6c757d';
  };

  if (expenses.length === 0) {
    return (
      <div className="card text-center">
        <h3 className="text-lg font-bold mb-4">No Expenses Yet</h3>
        <p className="text-gray">
          Start tracking your expenses by adding your first expense above.
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Recent Expenses</h2>
      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {expenses.map(expense => (
          <div 
            key={expense.id} 
            className="card"
            style={{ 
              marginBottom: '12px', 
              padding: '16px',
              border: '1px solid #e1e5e9',
              borderRadius: '12px'
            }}
          >
            {editingId === expense.id ? (
              <div>
                <div className="grid grid-2" style={{ marginBottom: '12px' }}>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      value={editForm.description}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount (₹)</label>
                    <input
                      type="number"
                      name="amount"
                      value={editForm.amount}
                      onChange={handleEditChange}
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={editForm.category}
                    onChange={handleEditChange}
                    required
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex" style={{ gap: '8px' }}>
                  <button 
                    className="btn btn-success"
                    onClick={() => handleSave(expense.id)}
                  >
                    Save
                  </button>
                  <button 
                    className="btn btn-danger"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-between">
                  <div>
                    <h3 className="text-lg font-bold">{expense.description}</h3>
                    <div className="flex" style={{ marginTop: '8px', gap: '16px' }}>
                      <div className="flex">
                        <Calendar size={16} style={{ marginRight: '4px' }} />
                        <span className="text-gray text-sm">
                          {format(new Date(expense.date), 'MMM dd, yyyy')}
                        </span>
                      </div>
                      <div className="flex">
                        <Tag size={16} style={{ marginRight: '4px' }} />
                        <span 
                          className="text-sm font-bold"
                          style={{ color: getCategoryColor(expense.category) }}
                        >
                          {expense.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex" style={{ alignItems: 'center', gap: '8px' }}>
                    <span className="text-xl font-bold text-red">
                      ₹{parseFloat(expense.amount).toFixed(2)}
                    </span>
                    <button
                      className="btn"
                      style={{ padding: '8px', minWidth: 'auto' }}
                      onClick={() => handleEdit(expense)}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ padding: '8px', minWidth: 'auto' }}
                      onClick={() => onDeleteExpense(expense.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList; 