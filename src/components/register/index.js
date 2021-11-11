import React, { useReducer } from 'react';
import Register from './register.component';
import { reducer, getPayload } from './register.reducer';
import authenticationService from '../../services/authentication.service';

export default () => {

  // ------------------------------------------- state -------------------------------------------
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- handlers -------------------------------------------

  /**
   * handle the register button click
   * @param {*} state the cuurent state
   */
  const registerHandler = (state) => {

    if(state.userErr === "" && state.emailErr === "" && state.passwordErr === ""){
      //inputs are valid, contacting the server...

      authenticationService.getInstance().signup(state.username, state.email, state.password)
        .then(response => alert('success!'))
        .catch((err) => alert(err.response.data));
    } else {
      //inputs are not valid
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
