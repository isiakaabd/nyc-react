
import React, { Component } from 'react';
import TextInputList from "../layout/input/TextInputList";
import Textarea from '../layout/input/Textarea';
import PropTypes from "prop-types"
import "../css/contact-us.css";
import axios from 'axios';


class ContactUs extends Component {
    state = {
        name: "",
        email: "",
        textarea: "",
        error: {}

    }

    onsubmit = (e) => {
        e.preventDefault();


        const { name, email, textarea } = this.state;



        if (name === "") {
            this.setState({ error: { name: 'Name is Required ' } })
            return
        }


        if (email === "") {
            this.setState({ error: { email: 'Email is Required ' } })
            return
        }


        if (textarea === "") {
            this.setState({ error: { textarea: ' textarea is Required ' } })
            return
        }


        const NewContact = {
            id: Date.now(),
            name,
            email,
            textarea,

            // if the key is the same as the value, there is no need of writing it 
            // e.g name:name,
            // email : email             so instead, write as above (newContact)
        }

        // to clear state
        this.setState({
            name: "",
            email: "",
            textarea: "",
            error: {}


        })

        axios.post("https://jsonplaceholder.typicode.com/posts", NewContact).then(response => {
            console.log(NewContact)
            console.log(response);

        })


    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }



    render() {
        const { name, email, textarea, error } = this.state
        return (
            <div className="d-flex justify-content-center my-5" >
                <div className=" col-10 mx-auto col-md-4  lg-col-5  mt-2" style={divContainer}>


                    <h2 className="font-weight-bold text-center text-uppercase mb-2">Contact US</h2>
                    <form >


                        <div className="form-group ">

                            {/*Name Input  field  */}


                            <TextInputList
                                label="Name"
                                name="name"
                                className="form-control"
                                onChange={this.onChange}
                                value={name}
                                type="text"
                                error={error.name}

                            />



                            {/*Email Input  field  */}
                            <TextInputList
                                label="Email"

                                name="email"
                                className="form-control"
                                onChange={this.onChange}
                                value={email}
                                type="email"
                                error={error.email}

                            />



                            {/*Textarea Input  field  */}
                            <Textarea

                                label="Textarea"
                                name="textarea"
                                isRequired
                                className="form-control"
                                onChange={this.onChange}
                                value={textarea}
                                type="textarea"
                                error={error.textarea}
                            />


                            <button type="button" value="submit" onClick={this.onsubmit} className="btn btn-block    btn-warning mb-3 text-uppercase" >Submit</button>

                        </div >


                    </form>


                </div >

            </div>


        )
    }
}
const divContainer = {

    backgroundColor: "#f3f3f3",
    boxShadow: "0 0 10px #000000b3",
    borderRadius: "5px",
    padding: "12px 20px",
    alignItem: "center",
    marginTop: "20px",
    width: "200px",
    alignSelf: "center"
}



ContactUs.propTypes = {
    TextInputList: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired

    })
}



export default ContactUs