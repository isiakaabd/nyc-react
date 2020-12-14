import React, { Component, createRef } from 'react';
import { Link } from "react-router-dom";
import "./css/special/signup.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
//import logo from '../img/logo.png';

// Functional Component

class SignUpLogin extends Component {
  constructor(props){
    super(props);
    // Creating a Ref
    this.login = createRef()
    this.state = {};

  }




  componentDidMount(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });  

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  



  render() {
    return (
      <Formik
      // Initial Values of the props
      initialValues={{ email: "", password: "" , name: ""}}
      // Validation Defination with yup
      validationSchema={yup.object().shape({
        name: yup.string()
          .max(15, "Must be 15 characters or less")
          .min(3, "Must be at least 3 characters")
          .required("This field is Required"),
        email: yup.string()
        .email("Email is Invalid")
        .required("Enter a valid Email Address"),
        password: yup
          .string()
          .required("Password is Required")
          .min(8, "Password must be at least 8 Characters")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ),
      })}
    >
      {(props) => {
        const {
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        } = props;
        return (
          <div className="mainer" id="main">
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <Form>
               
                  <h2 className="first-h1">Create Account</h2>
                  <p className="p1">Via</p>
                  <div className="social-media-platforms">
                    <Link to="/" className="social-media-1">
                      <i className="fab fa-facebook" />
                    </Link>
                    <Link to="/" lassName="social-media-1">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="/" className="social-media-1">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </div>
                  <span>OR</span>
                  <Field
                    type="text"
                    name="name"
                    id="business-name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Business Name"
                    className={errors.name && touched.name && "error"}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">
                    {errors.name}
                    </div>
                  )}
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Email Address"
                    className={errors.email && touched.email && "error"}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">
                      <i className="fas fa-exclamation-circle"></i>
                      {errors.email}
                    </div>
                  )}
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Password"
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">
                      <i className="fas fa-exclamation-circle"></i>
                      {errors.password}
                    </div>
                  )}
                  <button
                    type="submit"
                    id="signup-button"
                    disabled={isSubmitting}
                    
                  >
                    Sign Up
                  </button>
                </Form>
              </div>

              <div className="form-container sign-in-container">
                <Form>
                  <h2 className="first-h1">Welcome Back</h2>
                  <p className="p2"> Sign In Via</p>
                  <div className="social-media-platforms">
                    <Link to="/" className="social-media-1">
                      <i className="fab fa-facebook" />
                    </Link>
                    <Link to="/" className="social-media-1">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="/">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </div>
                  <span>OR</span>
                  <Field
                    type="email"
                    name="email"
                    id="signin-email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                    placeholder="Enter your Email Address"
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">
                      <i className="fas fa-exclamation-circle"></i>
                      {errors.email}
                    </div>
                  )}
                  <Field
                    type="password"
                    name="password"
                    id="signin-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                    placeholder="Enter Password"
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">
                      <i className="fas fa-exclamation-circle"></i>
                      {errors.password}
                    </div>
                  )}
                  <Link to="./forgot">Forgot your password?</Link>
                  <button
                    type="submit"
                    id="login-button"
                    className="login-button"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
                </Form>
              </div>

              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h2 className="first-h1">Already have an account? </h2>
                    <p className="p3">
                      Provide your details and continue your journey with us.
                    </p>
                    <button className="ghost" id="signIn">
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h2 className="first-h1">Don't Have an Account Yet?</h2>
                    <p className="p4">
                      Enter your details and start journey with us
                    </p>
                    <button className="ghost" id="signUp">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <style jsx="true">{`
              @import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600&family=Rubik:wght@300;400&family=Zilla+Slab:wght@500&display=swap");

              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              body {
                font-family: "Ubuntu", sans-serif;
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

              p1,
              p2,
              p3,
              p4 {
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

              a:hover {
                text-decoration: none;
              }

              .container {
                background: #fff;
                border-radius: 10px;
                position: relative;
                overflow: hidden;
                width: 1180px;
                max-width: 100%;
                min-height: 620px;
                margin-top: 12rem;
                margin-bottom: 14rem;
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

              .social-media-platforms a:hover {
                text-decoration: none;
              }

              .form-container input {
                border: 1px solid #eee;
                background: #eee;
                padding: 12px 15px;
                margin: 8px 0;
                width: 100%;
                border-radius: 5px;
                margin-bottom: 30px;
              }

              input.error {
                border-color: red;
              }

              .input-feedback {
                color: rgba(235, 54, 54);
                margin-top: -15px;
                padding-top: 10px;
                font-size: 12px;
                margin-bottom: 20px;
              }

              .input-feedback i {
                padding-right: 7px;
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

              .login-button {
                border-radius: 10px;
              }

              #signup-button {
                border-radius: 10px;
                background: #ebba32;
                color: white;
             
                font-weight: bold;
                padding: 12px 45px;
                letter-spacing: 1px;
                
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
                background: linear-gradient(to right, #f3c853, #fcce50)
                  no-repeat 0 0 / cover;
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
        );
      }}
    </Formik>
    )
  }
}

export { SignUpLogin }
