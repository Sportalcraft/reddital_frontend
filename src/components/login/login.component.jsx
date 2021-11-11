import React from 'react'
import './login.styles.css'

export default function Register({onUserNameChange, onPasswordChange, onLogin, signup, state}) {

    return (
        <div className= "login center form-block">
           
            <h1 className="title lobster-font">Login</ h1>

            <input id="username" className="input textinput" onChange={onUserNameChange} placeholder="username" type="text"></input> 
            <br />
            <label className="validator">{state.userErr}</label>

            <br />

            <input id="password" className="input textinput" onChange={onPasswordChange} placeholder="password" type="password"></input> 
            <br />
            <label className="validator">{state.passwordErr}</label>

            <br />
            <br />
            <button id="login" className="buton loginButon sil-font" onClick={onLogin} type="submit">Login</button>

            <button id="signupRedirect" className='redirectSignup link'>don't have one? register now!</button>
        </div>
    )
}