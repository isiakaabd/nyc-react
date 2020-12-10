import React from "react";
import { Link } from "react-router-dom";
import "./css/special/signup.css";
//import logo from '../img/logo.png';

// Functional Component

const Login = (props) => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () =>
    container.classList.add("right-panel-active")
  );

  signInButton.addEventListener("click", () =>
    container.classList.remove("right-panel-active")
  );

  return (
    <div className="mainer" id="main">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="first-h1">Create Account</h1>
            <p className="p1">Via</p>
            <div className="social-media-platforms">
              <Link className="social-media-1">
                <i className="fab fa-facebook" />
              </Link>
              <Link className="social-media-1">
                <i className="fab fa-instagram" />
              </Link>
              <Link className="social-media-1">
                <i className="fab fa-linkedin" />
              </Link>
            </div>
            <span>OR</span>
            <input
              type="text"
              name="name"
              id="business-name"
              placeholder="Business Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <button type="submit" id="signup-button" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="first-h1">Welcome Back</h1>
            <p className="p2"> Sign In Via</p>
            <div className="social-media-platforms">
              <Link className="social-media-1">
                <i className="fab fa-facebook" />
              </Link>
              <Link className="social-media-1">
                <i className="fab fa-instagram" />
              </Link>
              <Link>
                <i className="fab fa-linkedin" />
              </Link>
            </div>
            <span>OR</span>
            <input
              type="email"
              name="email"
              id="signin-email"
              placeholder="Enter your Email Address"
            />
            <input
              type="password"
              name="password"
              id="signin-password"
              placeholder="Enter Password"
            />
            <Link>Forgot your password?</Link>
            <button type="submit" id="login-button" className="login-button">
              Sign In
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="first-h1">Already have an account? </h1>
              <p className="p3">
                Provide your details and continue your journey with us
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="first-h1">Don't Have an Account Yet?</h1>
              <p className="p4">Enter your details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
