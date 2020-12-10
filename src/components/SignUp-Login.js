import React from 'react';
import { Link } from 'react-router-dom'
import './css/special/signup.css'
//import logo from '../img/logo.png';

// Functional Component

const Login = props =>{


 
 

    return (

      
        <div className="mainer" id="main">
        <div className="container" id="container">

          
  <div className="form-container sign-up-container">
    <form action="#">
      <h1 className="first-h1">Create Account</h1>
      <p className="p1">Via</p>
      <div className="social-media-platforms">
        <Link className="social-media-1"><i className="fab fa-facebook" /></Link>
        <Link className="social-media-1"><i className="fab fa-instagram" /></Link>
        <Link className="social-media-1"><i className="fab fa-linkedin" /></Link>
      </div>
      <span>OR</span>
      <input type="text" name="name" id="business-name" placeholder="Business Name" />
      <input type="email" name="email" id="email" placeholder="Enter your Email Address" />
      <input type="password" name="password" id="password" placeholder="Enter Password" />
      <button type="submit" id="signup-button" className="signup-button">Sign Up</button>
    </form>
  </div>


  <div className="form-container sign-in-container">
    <form action="#">
      <h2 className="first-h1">Welcome Back</h2>
      <p className="p2"> Sign In Via</p>
      <div className="social-media-platforms">
        <Link className="social-media-1"><i className="fab fa-facebook" /></Link>
        <Link className="social-media-1"><i className="fab fa-instagram" /></Link>
        <Link><i className="fab fa-linkedin" /></Link>
      </div>
      <span>OR</span>
      <input type="email" name="email" id="signin-email" placeholder="Enter your Email Address" />
      <input type="password" name="password" id="signin-password" placeholder="Enter Password" />
      <Link>Forgot your password?</Link>
      <button type="submit" id="login-button" className="login-button" >Sign In</button>
    </form>
  </div>


  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h2 className="first-h1">Already have an account? </h2>
        <p className="p3">
          Provide your details and continue your journey with us
        </p>
        <button className="ghost" id="signIn">Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h2 className="first-h1">Don't Have an Account Yet?</h2>
        <p className="p4">
          Enter your details and start journey with us
        </p>
        <button className="ghost" id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>


<style jsx>{`

      
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600&family=Rubik:wght@300;400&family=Zilla+Slab:wght@500&display=swap');



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
  
  body {
    font-family: 'Ubuntu', sans-serif;
   
  }
  
  .mainer {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;
    margin: 0rem;
  }
  
  h2 {
    font-weight: bold;
    margin: 1rem 0;
  }
  
  p1, p2, p3, p4 {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  
  span {
    font-size: 12px;
  }
  
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  
  .container {
    background: #fff;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 1180px;
    max-width: 100%;
    min-height: 560px;
    margin-top: 8rem;
    margin-bottom: 10rem;
  
  }
  
  .form-container form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .social-media-platforms {
    margin: 20px 0;
  }
  
  
  .social-media-platforms a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
  
  .form-container input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    border-radius: 5px;
  }
  
  button {
    border: 1px solid;
   
   
  }
  
  

  button:active {
    transform: scale(0.95);
  }
  
  button:focus {
    outline: none;
  }
  
  button.ghost {
    background: transparent;
    border-color: #fff;
    border-radius: 10px;
  }

.login-button{
    border-radius: 10px;
  }

.signup-button{
    border-radius: 10px;
    background: #EBBA32;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }
  
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  
  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  
  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
  
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }
  
  .overlay {
    /* background: #ff416c; */
    background: linear-gradient(to right, #f3c853, #fcce50) no-repeat 0 0 / cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  
  .overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
  }
  
  .overlay-right {
    right: 0;
    transform: translateX(0);
  }
  
  .overlay-left {
    transform: translateX(-20%);
  }
  
  /* Animation */
  
  /* Move Signin to the right */
  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  
  /* Move Overlay to the left */
  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }
  
  /* Bring sign up over sign in */
  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }
  
  /* Move overlay back to the right */
  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }
  
  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  
  .container.right-panel-active .overlay-right {
    transform: translateX(100%);
  }
             
  
  `}</style>




</div>



    )
}

export default Login