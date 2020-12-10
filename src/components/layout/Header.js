import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../css/nav.css";

// Functional Component

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Naija Yellow Catalogue Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" />
      <div className=" nav-flex collapse navbar-collapse" id="navbarNav">
        <div className="nav-item-1 mr-auto">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <a href="./contents/pricing.html">Adverts</a>
            </li>
            <li>
              <a href="./contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-item-2">
          <ul>
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
            <li>
              <a href="./contents/sign-up.html" className="add-btn">
                + Add Listings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
