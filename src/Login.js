import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase"
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const sigIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) { history.push('/') }
            }).catch(error => console.log(error))
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }
            }).catch(error => console.log(error))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPasword(e.target.value)} />
                    <button type="submit" className="btn login__signInButton" onClick={sigIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZONE(clone of Amazon) Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="btn login__registerButton">Create an account</button>
            </div>
        </div>
    )
}

export default Login
