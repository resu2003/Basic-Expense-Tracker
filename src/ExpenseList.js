import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
