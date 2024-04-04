import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ type: '', amount: 0 });
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpense = () => {
    if (newExpense.type && newExpense.amount > 0) {
      setExpenses([...expenses, newExpense]);
      setTotalExpense(totalExpense + newExpense.amount);
      setNewExpense({ type: '', amount: 0 });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewExpense(prevState => ({
      ...prevState,
      [name]: name === 'amount' ? parseFloat(value) : value,
    }));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <label htmlFor="expenseType">Expense Type:</label>
        <input
          type="text"
          id="expenseType"
          name="type"
          value={newExpense.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="expenseAmount">Amount:</label>
        <input
          type="number"
          id="expenseAmount"
          name="amount"
          value={newExpense.amount}
          onChange={handleChange}
        />
      </div>
      <button onClick={addExpense}>Add Expense</button>
      <div>
        <h2>Expenses List</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.type}: Rs{expense.amount}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total Expenses: Rs{totalExpense}</h3>
      </div>
    </div>
  );
};

export default ExpenseTracker;

