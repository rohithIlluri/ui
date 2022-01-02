import React from 'react'
import './signup.css';

const Signup = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                <div id="login-box">
  <div class="left">
    <h1>Please enter Your gmail address</h1>
    <input type="text" name="email" placeholder="E-mail" />
    
    <input type="submit" name="signup_submit" value="Sign me up" />
  </div>
</div>
                </div>
            </div>
            
        </div>
    )
}

export default Signup

