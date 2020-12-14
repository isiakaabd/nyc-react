import React, { Component } from "react";
import "../css/forgot.css";
import Reset from "./ResetPassword";

class ForgotPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="forgot-section">
          <div className="forgot-case">
            <div className="image_case">
              <img
                src={process.env.PUBLIC_URL + "/images/forgotArt.png"}
                alt="Forgot"
              />
            </div>
            <div className="form_case">
              <p className="first-text">Forgot Password</p>
              <p className="second-text">
                Seems like you forgot your password, we'll send a recovery{" "}
                <br /> link to your email
              </p>
              <div className="input-icon">
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <a href={Reset}> </a>
                <button className="send-link" type="submit">
                  Send Recovery Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
