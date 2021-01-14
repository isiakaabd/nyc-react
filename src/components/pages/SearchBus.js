import React, { Component } from 'react'
import axios from 'axios'
import "../css/searchBus.css"

class SearchBus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }

        this.cancel = '';
    }

    fetchSearchResult = (updatedPageNo, query) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://pixabay.com/api/?key=19890992-08817bdd72ea00c7556c9633c&q=${query}&page=4`

        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
        .then (res => {
            const resultNotFoundMsg = ! res.data.hits.length
                                    ? 'There are no search results. Please try a new search'
                                    : ''
            this.setState({
                results: res.data.hits,
                message: resultNotFoundMsg,
                loading: false
            })
        })
        .catch(error => {
            if (axios.isCancel(error) || error) {
                this.setState({
                    loading: false,
                    message: 'Failed to fetch data'
                })
            }
        })
    }

    handleOnInputChange = (e) => {
        const query = e.target.value;
        if (!query) {
            this.setState({query, results: {}, message: ''})
        } else {
            this.setState( {query: query, loading: true, message: ""}, () => {
                this.fetchSearchResult( 1, query);
            })
        }
    }

    renderSearchResult = () => {
        const {results} = this.state;

        if ( Object.keys( results ).length && results.length) {
            return (
                <div className="results-container">
                    { results.map( result => {
                        return (
                            <a className="result-item" key={result.id} href={result.previewURL}>
                                <h6 className="image-username">{result.user}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={`${result.username} image`} />
                                </div>
                            </a>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        const {query, message} = this.state; 
        console.log(this.state)
        return (
            <div>
                {/* Search Header */}
                <h2 className="search-header">Search For Your Businesses</h2>
               {/* Search Field */}
               <label className="search-label" htmlFor="search-input">
                   <input
                   style={{border: "none"}}
                   name="query"
                    type="text"
                    value={query}
                    onChange={this.handleOnInputChange}
                    id="search-input"
                    placeholder="Business Name"
                   />
                    <select style={{border: "none", margin: "0px 10px"}} required>
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
                </select>
                    <i className="fa fa-search" aria-hidden="true" />
               </label>
               {/* Error Message */}
               {message && <p className="message">{message}</p>}
               {/* Result */}
               {this.renderSearchResult()}
            </div>
        )
    }
}

export default SearchBus;