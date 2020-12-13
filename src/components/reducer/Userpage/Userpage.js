import React from 'react';
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInput from '../../layout/userpageInput/TextInput';
import Textarea from '../../layout/userpageInput/Textarea';
import SelectInputValue from '../../layout/userpageInput/SelectInput';



export default function Userpage() {
    const users = useSelector(state => state.userReducer.contacts[0])

    const { phone, businessName, email, website, textarea, location, fax, state, category } = users
    return (

        <div className="container">


            <div className=" d-sm-block  d-md-none d-lg-none col-8 mx-auto col-sm-6 " style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <input type="image" ondrop="imgSave()" style={{ width: "100px", margin: "0 25% 5% 25%" }} src="/images/arimoro.jpeg" className=" rounded-circle imageDisplay" id="imageDisplay" />
                <h3 id="Name" style={{ fontWeight: 900, fontFamily: 'ubuntu', fontSize: "14px", textAlign: "center" }} > {businessName} </h3>
                <button type="button" className=" align-self-center btn btn-warning btn-block"><a href="#">View Profile</a></button>

            </div>
            <div className="d-none   d-lg-block">
                <div style={{ width: '100%' }}>

                    <h2>Upload Photos</h2>
                </div>
                <span className="span"> <h4>Upload profile or Logo <i className="fa fa-exclamation-circle" />
                    <i className="fas fa-upload fa-1x" /></h4> </span>
                <div className="fine" style={{ width: '301px', height: '200px', background: '#ebebe0' }}>
                    <form style={{ width: '300px' }}>
                        <div style={{ width: '300px' }} className="custom-file">
                            <input style={{ height: '200px' }} type="file" className="custom-file-input" name="filename" id="customFile" accept="image/gif, image/jpeg, image/png" />
                        </div>
                    </form>
                    <h2>Or drag your file here to upload</h2>
                    <i className="fas fa-cloud-upload-alt fa-5x" />
                </div>
            </div>

            <form className="mt-3">
                <div className="form-row">
                    <TextInput

                        value={businessName}
                        id="Business Name"
                        name="text"
                        placeholder="Business Name " />

                    <TextInput

                        value={email}
                        id="email"
                        placeholder="Email"
                        name="email"
                    />

                </div>

                <div className="form-row">
                    <TextInput

                        name="text"
                        value={phone}
                        id="phone-Number"
                        placeholder="Phone-Number" />

                    <TextInput
                        name="fax"
                        value={fax}
                        id="Fax"
                        placeholder="Fax" />
                </div>


                <Textarea
                    name="textarea"
                    id="textarea"
                    placeholder="short-description"
                    value={textarea}

                />

                <div className="location" >
                    <h2>Location <span className="glyphicion-box " /></h2>
                </div>





                <div className="form-row">

                    <SelectInputValue
                        name="Location"
                        id="city"
                        value={state}
                    >

                        <option value="Abuja">Abuja</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Osun"> Osun </option>
                        <option value="Lagos">Lagos</option>


                    </SelectInputValue>

                    <SelectInputValue
                        name="Location"
                        id="city"
                        value={category}

                    >
                        <option value={category} selected>{category}</option>
                        <option value="Real Estate/Property">Real Estate/Property</option>
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

                    </SelectInputValue>






                </div>
                <div className="form-row">


                    <TextInput

                        name="url"
                        value={website}
                        id="url"
                        placeholder="url" />


                    <TextInput

                        name="location"
                        value={location}
                        id="locations"
                        placeholder="location" />


                </div>
                <div className="form-group  ">
                    <iframe height="248px" frameBorder={0} className="form-control" scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=1200&height=482.89&hl=en&q=Ahmadu%20Bello%20Way,%20Gudu,%20Abuja.%20Abuja+(Iya%20basira)&t=&z=15&ie=UTF8&iwloc=B&output=embed" />
                </div>
                <button type="submit" className="btn btn-lg btn-warning"> Update My Info</button>
            </form>
        </div >


    )
}
