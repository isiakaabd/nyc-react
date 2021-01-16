import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import '../css/search.css'
import pic from '../img/imageplaceholder.jpg'
// import { withRouter } from "react-router-dom";

class SearchResult extends Component {
  componentDidMount() {
    const {businesses} = this.props.result.location.state;
    console.log(businesses);
  }

  render() {
    const {businesses} = this.props.result.location.state;
    const bus = businesses.map((business) => (
      <span className="wrapper">
      <div className="card" style={{maxWidth: "18rem"}}>
         <img
            src={pic}
            className="card-img-top"
            alt="Placeholder Picture"
          />
        <div className="card-body">
            <h5 className="card-title">Business Name: {business.businessName}</h5>
              <p className="card-text">{business.description}</p>
               </div>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item">Category: {business.userCategory}</li>
                    <li className="list-group-item">Website: {business.website}</li>
                    <li className="list-group-item">Email: {business.email}</li>
                    <li className="list-group-item">Location: {business.state}</li>
                    <li className="list-group-item">Mobile Number: {business.phoneNumber}</li>
                  </ul>
                </div>        
          </span>
            ))
            return (
              <div>     
                <Header />
                <span>
                {bus}
                </span>
              <Footer />
              </div>

     );
  }
}

export default SearchResult;
