import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle, user} = useAuth();
    return (
        <div className="login-form">
            {
                !user.email && <div>
                    <h2>Login</h2>
                    <form action="">
                        <input type="text" placeholder="Email" /> <br />
                        <input type="text" placeholder="Password" /> <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <span>new to ema-john?  </span> <Link to="/register">Create Account</Link>
                    <div>-------or--------</div>
                    <button 
                        onClick={signInUsingGoogle} 
                        className="btn-regular"
                    >Google Sign In</button>
                </div>
            }
        </div>
    );
};

export default Login;