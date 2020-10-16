import React, { useState } from 'react';
import './LogIn.css';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function LogIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    }


    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_image"
                    src="https://www.virtualrecruitment.ie/wp-content/uploads/2020/07/amazon-blog.jpg"
                    alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signin">Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to Amazon's Condition of Use & Sale Please see our privacy Notice,our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button onClick={register} className="login_signup">Create Yout Amazon Account</button>
            </div>
        </div>
    )
}

export default LogIn
