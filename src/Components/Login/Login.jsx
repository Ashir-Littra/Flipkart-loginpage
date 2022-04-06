import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className="login-container">
        <div className="login-title">
        <h3>Log in for the best experience</h3>
        <p>Enter your phone number to continue</p>
        </div>
        <div className="login-inputField">
            <div className="login-inputField-input">
                <select>
                    <option value="+91">+91</option>
                </select>
                <input placeholder='Phone Number'/>

            </div>
            <div className="login-inputField-link">
                <a href="#">Use Email-ID</a>
            </div>
        </div>
        <div className="login-footer">
            <p>By continuing, you agree to Flipkart's <a href="http://flipkart.">Terms of Use</a> and 
            <a href="http://flipkart."> Privacy Policy</a></p>
        </div>
      
    </div>
  )
}

export default Login
