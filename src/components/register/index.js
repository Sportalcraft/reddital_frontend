import React, { useReducer } from 'react';
import Register from './register.component';
import { reducer, getPayload } from './register.reducer';
import authenticationService from '../../services/authentication.service';

export default () => {

  // ------------------------------------------- state -------------------------------------------
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- handlers -------------------------------------------

  const registerHandler = (state) => {

    if(userErr === "" && emailErr === "" && passwordErr === ""){
      authenticationService.getInstance().signup(username, email, password)
        .then(response => alert('success!'))
        .catch((err) => alert(err.response.data));
    } else {
      alert('bad info!');
    }
  }

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Register
    state = {state}

    onUserNameChange  = {event       => dispatch(getPayload().USERNAME_CHANGE(event.target.value))}
    onEmailChange     = {event       => dispatch(getPayload().EMAIL_CHANGE(event.target.value))}
    onPasswordChange  = {event       => dispatch(getPayload().PASSWORD_CHANGE(event.target.value))}

    onRegister        = {()       => registerHandler(state)}
  />);
};
