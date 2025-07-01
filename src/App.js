import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseStats from './components/ExpenseStats';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load expenses from localStorage on component mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    setExpenses([newExpense, ...expenses]);
    setShowForm(false);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, ...updatedExpense } : expense
    ));
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        
        <ExpenseStats expenses={expenses} />
        
        <div className="card">
          <div className="flex flex-between">
            <h2 className="text-xl font-bold">Expenses</h2>
            <button 
              className="btn" 
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : 'Add Expense'}
            </button>
          </div>
          
          {showForm && (
            <ExpenseForm onAddExpense={addExpense} />
          )}
        </div>
        
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={deleteExpense}
          onEditExpense={editExpense}
        />
      </div>
    </div>
  );
}

export default App; 