import React from 'react';
import './sign-in.styles.css';

const Signin = () => (
  <div className= "Signin center form-block">
    <h1 className="title lobster-font">Register</ h1>
    <input id="username" className="input textinput" placeholder="username" type="text"></input>
    <br />
    <input id="email" className="input textinput" placeholder="email" type="email"></input>
    <br />
    <input id="password" className="input textinput" placeholder="password" type="password"></input>
    <br />
    <br />
    <button id="register" className="buton registerButon sil-font" type="submit">Register</button>
  </div>
);

export default Signin;
