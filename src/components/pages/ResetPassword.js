import React, { Component } from "react";
import Forgot from "./ForgotPassword";


class ResetPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="reset-section">
          <div className="reset-case">
            <div className="image_case">
              <img
                src={process.env.PUBLIC_URL + "/images/recoverArt.png"}
                alt="Reset"
              />
            </div>
            <div className="form_case">
              <div className="input-icon">
                <p className="first-text">Reset Password</p>
                <p className="second-text">
                  Provide the following details to reset your password.
                </p>
                <input
                  type="text"
                  name="code"
                  id="resetcode"
                  placeholder="Reset code"
                  required
                />
                <br />
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="newpassword"
                  id="password"
                  placeholder="New password"
                  required
                />
                <br />
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="confirmpassword"
                  id="cpassword"
                  placeholder="Re-enter password"
                  required
                />
                <br />
                <button className="reset" type="submit">
                  Reset Password
                </button>
                <br />
                <a href={Forgot}>
                  <p className="resetcode">Resend Reset Code</p>
                </a>
              </div>
            </div>
          </div>


          <style jsx>{`

          .reset-section{
        background-color: white;
        box-sizing: border-box;
        max-width: 100%;
        
        justify-content: space-between;
    }
    .reset-section .reset-case{
        display: flex;
        flex-direction: row ;
        justify-content: space-around;
    }
    .reset-case img{ 
        width: 509px;
        height:530px;
        margin: 1rem 2rem;
    }
    .reset-case .image_case{
        flex: 1.5;
        margin-top: 20px;
        margin-right: 15px;
    }
    .reset-case .form_case{
        flex: 1.2;
        margin-right: 10px;
        margin-top: 60px;
        padding: 10px;
    }
    .reset-case .first-text{
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        text-indent: 20px;
        margin: 10px 30px 10px 10px;
        font-style: normal;
        font-size: 35px;
        line-height: 49.91px;
        color: #313236;
    }
    .reset-case .second-text{
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        text-indent: 20px;
        margin: 10px;
        margin-left: 10px;
        line-height: 22.52px;
        font-weight: normal;
        color: #313236;
    }
    .input-icon i{
        position: absolute;
        margin-top: 19px;
        margin-left: 360px;
        float: right;
        padding: 15px;
        color: gray;
      }
    .reset-case input[type = text]{
        width: 400px;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        height: 60px;
        color: #313236;
        font-size: 14px;
        border: 2px solid gray;

    }
    .reset-case input[type = password]{
        width: 400px;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        height: 60px;
        color: #313236;
        font-size: 14px;
        border: 2px solid gray;

    }
    
    
    .reset-case input[type = text]:focus{
        border: 3px solid #FFE6A1;
        outline: none;
    }
    .reset-case input[type = password]:focus{
        border: 3px solid #FFE6A1;
        outline: none;
    }
    
   .reset {
        background-color: #3A4151;
        width: 400px;
        height: 60px;
        border-radius: 10px;
        font-family: 'Ubuntu', sans-serif;
        font-size: 26px;
        margin: 10px;
        color: #FFE6A1;
        font-weight: bold;
    }
    .reset:hover{
        box-shadow: 0px 3px 3px 2px rgba(58, 65, 81, 0.90);
       
       
    }
    .reset-case .reset:hover{
        color: #ebbf46;
    }
    .resetcode{
        color:#3A4151;
        font-size: 14px;
        font-weight: bold;
        text-indent: 120px;
    }




        `}</style>




        </section>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
