import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id)
  }
  return (
    <li>
      <Card className='expense-item' >
        <ExpenseDate date={props.date} />
        <div className='expense-item__description' >
          <h2 onClick={deleteHandler}>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
