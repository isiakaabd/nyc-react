import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom';
// import { connect } from "react-redux";
// import { getBusiness } from "../reducer/action";
import "../css/searchBus.css"

class SearchBus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessName: '',
            userCategory: '',
            state: '',
            redirect: false,
            allBusiness: [],
        }
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to="/search" />
      }
    }

    // FETCHING ALL BUSINESSES
    fetchUsers() {
      fetch("https://naija-yellow-catalogue.herokuapp.com/api/company/search")
      .then(response => response.json())
      .then(data =>
          this.setState({
            allBusiness: data,
          })
      )
      .catch((err) => console.log("Request Failed", err)); // Catch errors
    }

    componentDidMount() {
      this.fetchUsers();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

        let newAllBusiness = this.state.allBusiness.filter((d) => {
          let searchValue = d.businessName || d.userCategory || d.state;
          return searchValue.includes(e.target.value);
        })

        this.setState({
          allBusiness: newAllBusiness,
        })

        console.log(newAllBusiness);
    }

    onSubmit = (e) => {
        console.log('The name of our business is ' + this.state.allBusiness.businessName + ' and our location is ' + this.state.state)
    }

    render() {        
       const {allBusiness} = this.state;
        return (
            <div>
              {this.renderRedirect()}
                {/* Search Header */}
                <h2 className="search-header">Search For Your Businesses</h2>
               {/* Search Field */}
               <label className="search-label" htmlFor="search-input">
                   <input
                   style={{border: "none"}}
                   name="businessName"
                    type="text"
                    value={this.state.businessName}
                    onChange={this.onChange}
                    id="search-input"
                    placeholder="Business Name"
                   />
                   <input
                   style={{border: "none"}}
                   name="userCategory"
                    type="text"
                    value={this.state.userCategory}
                    onChange={this.onChange}
                    id="category-input"
                    placeholder="Category"
                   />
                   <input
                   style={{border: "none"}}
                   name="state"
                    type="text"
                    value={this.state.state}
                    onChange={this.onChange}
                    id="location-input"
                    placeholder="Location"
                   />
                 {/* <select style={{border: "none", margin: "0px 10px"}} required>
                  <option value disabled selected hidden>
                    Category
                  </option>
                  <option>Real Estate/Property</option>
                  <option>Beauty &amp; Fashion</option>
                  <option>Technology</option>
                  <option>Catering &amp; Decoration</option>
                  <option>Agriculture</option>
                  <option>Restaurant</option>
                  <option>Construction and Renovation</option>
                  <option>Transportation</option>
                  <option>News &amp; Media</option>
                  <option>Health and Fitness</option>
                  <option>Education &amp; Schools</option>
                  <option>Electronics</option>
                </select>
                <select required style={{border: "none"}}>
                  <option value disabled selected hidden>
                    Location
                  </option>
                  <option>Abuja</option>
                  <option>Kaduna</option>
                  <option>Lagos</option>
                  <option>Kano</option>
                  <option>Jos</option>
                </select> */}
                    {/* <i className="fa fa-search" onClick={this.setRedirect} aria-hidden="true" /> */}
                    <Link to={{pathname:"/search", state: {businesses: allBusiness}}} ><i className="fa fa-search" aria-hidden="true" /> </Link>
               </label>
            </div>
        )
    }
}

export default SearchBus;