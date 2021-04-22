import React from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.items;
  return (
    <Card className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
