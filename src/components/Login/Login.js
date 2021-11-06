import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle, user} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || "/";

    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
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
                        onClick={handleGoogleLogin} 
                        className="btn-regular"
                    >Google Sign In</button>
                </div>
            }
        </div>
    );
};

export default Login;