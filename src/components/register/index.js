import React, { useReducer } from 'react';
import Register from './register.component';
import { reducer, getPayload } from './register.reducer';

export default () => {
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Register
    state = {state}

    onUserNameChange  = {event       => dispatch(getPayload().USERNAME_CHANGE(event.target.value))}
    onEmailChange     = {event       => dispatch(getPayload().EMAIL_CHANGE(event.target.value))}
    onPasswordChange  = {event       => dispatch(getPayload().PASSWORD_CHANGE(event.target.value))}

    onRegister        = {()       => dispatch(getPayload().REGISTER_CLICK())}
  />);
};
