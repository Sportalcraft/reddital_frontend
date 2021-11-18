import React, { useReducer } from 'react';
import Login from './login.component';
import { reducer, getPayload } from './login.reducer';
import authenticationService from '../../services/authentication.service';

export default () => {

  // ------------------------------------------- state -------------------------------------------
 
  
  const [state, dispatch] = useReducer(reducer, reducer());

  // ------------------------------------------- action handlers -------------------------------------------
 

  /**
   * handle pressing the login vakue
   * @param {*} state the current state when clickin the buttom
   */
  const handleLogin = (state) => {
    if(state.userErr === "" && state.passwordErr === ""){
      //inputs are valid, contacting the server....

      authenticationService.getInstance().login(state.username, state.password)
        .then(response => {
          alert(`${response.data.id} ${response.data.username} ${response.data.email}`)
          authenticationService.getInstance().setLoggedUserAuthKey(response.data.id);
        })
        .catch((err) => alert(err.response.data));

    } else {
      // the inputs atre not valid
      alert('please provide valid credentials');
    }
  }

  /**
   * handle clickin the redirect to register button
   */
  const handleSignupRedirect = () => {
    //TODO
  }

  // ------------------------------------------- return statement -------------------------------------------
 
  return (
  <Login
     {...state}

    onUserNameChange  = {event       => dispatch(getPayload().USERNAME_CHANGE(event.target.value))}
    onPasswordChange  = {event       => dispatch(getPayload().PASSWORD_CHANGE(event.target.value))}

    onLogin           = {()       => handleLogin(state)}
    signup            = {handleSignupRedirect}
  />);
};
