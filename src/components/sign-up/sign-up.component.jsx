import React, { useState } from 'react';
import './sign-up.styles.css';

import authenticationService from '../../services/authentication.service';

import ValidatedInput from '../validated-input/validated-input.component';

const Signup = () => {
  
  // use state for each of the fields
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("                                      ");

  // ------------------------------------------- validators -------------------------------------------

  /**
   * @returns an error mesage for a the username, empty string if valid
   */
  const validateUsername = () => {
    if (username === "") {
      return "* please provide a username";
    }

    return "";
  };

   /**
   * @returns an error mesage for a the email, empty string if valid
   */
  const validateEmail = () => {
    if (email=== "") {
      return "* please provide an email"
    }

    return "";
  };

   /**
   * @returns an error mesage for a the password, empty string if valid
   */
  const validatePassword = () => {
    if (password=== "") {
      return "* please provide a password"
    }
    
    if (password.length < 6) {
      return "* please provide a password of length 6 atleast"
    }

    return "";
  };

  // ------------------------------------------- event handlers -------------------------------------------

  /**
   * validate values and register
   */
  const submitForm = () => {

    //remove whitespaces
    setUsername(username.trim());
    setEmail(email.trim());
    setPassword(password.trim());
    
    // check if there are errors, if not, continue with registrations
    if (validateUsername(username) === "" && validateEmail(email) === "" && validatePassword(password) === "") {
      authenticationService.getInstance().signup(username, email, password);
    } else {
      alert("please provide valid information!");
    }

  }

  // ------------------------------------------- return statement -------------------------------------------

  return (
  <div className= "Signin center form-block">
    <h1 className="title lobster-font">Register</ h1>
    
    <ValidatedInput id="username" placeholder="username" type="text" setVal={setUsername} validator = {validateUsername}></ ValidatedInput>
    
    <br />

    <ValidatedInput id="email" placeholder="email" type="email" setVal={setEmail} validator = {validateEmail}></ ValidatedInput>

    <br />

    <ValidatedInput id="password" placeholder="password" type="password" setVal={setPassword} validator = {validatePassword}></ ValidatedInput>
    
    <br />
    <br />
    <button id="register" className="buton registerButon sil-font" onClick={submitForm} type="submit">Register</button>
  </div>
);}





export default Signup;
