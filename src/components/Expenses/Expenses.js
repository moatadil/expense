import {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('All')
  const filterChangeHandler = (value) => {
    setSelectedYear(value)
  }
  const filterdDataHandler = props.data.filter(expense => {
    if (selectedYear === 'All') 
    return true
    return expense.date.getFullYear().toString() === selectedYear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}    
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterdDataHandler} />
      <ExpensesList items={filterdDataHandler} />
    </Card>
    );
};

export default Expenses;
