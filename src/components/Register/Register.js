import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form action="">
                    <input type="email" placeholder="email" /> <br />
                    <input type="password" placeholder="Password" /> <br />
                    <input type="password"  placeholder="Confrim Password"/> <br />
                    <input type="submit" value="Register" />
                </form>
                <span>Already Have an Account?</span> <Link to="/login">Login</Link>
                <div>-------or------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;