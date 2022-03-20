import React from 'react';

import './ExpenseDate.css';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const ExpenseDate = (props) => {
  const date = new Date(props?.date)
  const month = months[date?.getMonth()];
  const day = date?.toLocaleString('en-US', { day: '2-digit' });
  const year = date?.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
