import React from 'react';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <li className="expense-item">
      <span>{expense.description}</span>
      <span>₹{expense.amount.toFixed(2)}</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
