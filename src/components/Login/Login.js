import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button'
import LoginContext from '../context/LoginContext';

const emailReducer = (state, action) => {
  if(action.type === 'user_input'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'blur_input'){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}
const passwordReducer = (state, action) => {
  if(action.type === 'user_input'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'blur_input'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { 
    value : '', 
    isValid: undefined
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { 
    value : '', 
    isValid: undefined
  });
  const lctx = useContext(LoginContext)
  const {isValid : emailIsValid} = emailState
  const {isValid : passwordIsValid} = passwordState

  useEffect(() => {
    const validete = setTimeout (() => {
      console.log('effect')
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500)
    
    return () => {
      console.log('cleanup');

      clearTimeout(validete)
    }
  },[emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'user_input', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'user_input', val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'blur_input'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'blur_input'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    lctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
