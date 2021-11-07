import React from 'react';
import styles from './sign-in.module.css';

const Signin = () => (
  <div className={styles.Signin}>
    <h1 className={styles.title}>Register</ h1>
    <input id="username" className={styles.textinput} placeholder="username" type="text"></input>
    <br />
    <input id="email" className={styles.textinput} placeholder="email" type="email"></input>
    <br />
    <input id="password" className={styles.textinput} placeholder="password" type="password"></input>
    <br />
    <br />
    <button id="register" className={styles.registerButon} type="submit">Register</button>
  </div>
);

export default Signin;
