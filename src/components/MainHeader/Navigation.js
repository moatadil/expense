import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

import classes from './Navigation.module.css';

const Navigation = () => {
  const loginContext = useContext(LoginContext)
  
  return (
    <nav className={classes.nav}>
      <ul>
        {/* {loginContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {loginContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )} */}
        {loginContext.isLoggedIn && (
          <li>
            <button onClick={loginContext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
