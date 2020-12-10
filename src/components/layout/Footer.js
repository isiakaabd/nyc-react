import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/logo.png';
import '../css/footer.css'

const Footer = props =>{

    return (
        <footer>
        <div className="footer-container">
          <img src={logo} alt="The Footer Logo" />
          <div className="row">
            <div className="footer-logo">
              <div className="about-us">
                <h3>About Us</h3>
                <p>The Naija Yellow Catalogue web application is an online directory where businesses are
                  registered and organized by category. It also a platform where users can get information
                  on
                  businesses by searching based on name, category or location.</p>
              </div>
            </div>
            <div className="quick">
              <h3>Quick Links</h3>
              <ul>
                <a href="/">
                  <li>Register</li>
                </a>
            
                  <li>
                  <Link to="/faq">FAQs</Link>
                    </li>
                
                <a href="/">
                  <li>
                  <Link to="/terms">Terms &amp; Conditions</Link>
                  </li>
                </a>
                <a href="/">
                  <li>Top Events</li>
                </a>
                <a href="/">
                  <li>contact Us</li>
                </a>
              </ul>
            </div>
            <div className="newsletter">
              <h3>Subscribe to our newsletter</h3>
              <form className="form-inline">
                <input type="text" className="form-control" placeholder="Email address" /> <br />
                <button type="submit" className="btn btn-warning">Submit</button>
              </form>
            </div>
            <div className="follow-us">
              <h3>Follow Us</h3>
              <span>
                <i className="fab fa-twitter" />
                <i className="fab fa-linkedin" />
                <i className="fab fa-instagram" />
                <i className="fab fa-medium" />
              </span>
              <p>Copyright © 2020 Naija Yellow Catalogue.</p>
            </div>
          </div>
        </div>
      </footer>
      
    );
}

export default Footer;
