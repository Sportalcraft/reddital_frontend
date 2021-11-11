import React, { useReducer } from 'react';
import Login from './login.component';
import { reducer, getPayload } from './login.reducer';
import authenticationService from '../../services/authentication.service';

export default () => {

  // ------------------------------------------- state -------------------------------------------
 
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- action handlers -------------------------------------------
 

  const handleLogin = (state) => {
    if(state.userErr === "" && state.passwordErr === ""){
      authenticationService.getInstance().login(state.username, state.password)
        .then(response => alert(`${response.data.id} ${response.data.username} ${response.data.email}`))
        .catch((err) => alert(err.response.data));
    } else {
      alert('please provide valid credentials');
    }
  }

  const handleSignupRedirect = () => {
    //TODO
  }

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Login
    state = {state}

    onUserNameChange  = {event       => dispatch(getPayload().USERNAME_CHANGE(event.target.value))}
    onPasswordChange  = {event       => dispatch(getPayload().PASSWORD_CHANGE(event.target.value))}

    onLogin           = {()       => handleLogin(state)}
    signup            = {handleSignupRedirect}
  />);
};
