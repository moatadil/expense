import React from 'react';

import Card from '../UI/Card';
import classes from './Home.module.css';
import ExpensesApp from '../MainApp/ExpensesApp';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <ExpensesApp />
    </Card>
  );
};

export default Home;
