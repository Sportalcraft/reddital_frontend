import React, { useReducer } from 'react';
import Login from './login.component';
import { reducer, getPayload } from './login.reducer';

export default () => {
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Login
    state = {state}

    onUserNameChange  = {event       => dispatch(getPayload().USERNAME_CHANGE(event.target.value))}
    onPasswordChange  = {event       => dispatch(getPayload().PASSWORD_CHANGE(event.target.value))}

    onLogin           = {()       => dispatch(getPayload().LOGIN_CLICK())}
    signup            = {()       => dispatch(getPayload().SIGNUP_CLICK())}
  />);
};
