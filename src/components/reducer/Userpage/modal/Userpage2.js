import React from 'react';
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInput from '../../../layout/userpageInput/TextInput';
import Textarea from '../../../layout/userpageInput/Textarea';
import SelectInputValue from '../../../layout/userpageInput/SelectInput';

// import "../../css/userpage.css"



export default function Userpage2() {
    const users = useSelector(state => state.userReducer.contacts[0])


    const { phone, businessName, email, website, textarea, location, fax, state, category } = users
    return (

        <div className="container ">

            <div className="col-12 col-md-12 col-lg-12">



                <form className="mt-3  col-12 col-md-10 col-lg-10 mx-auto">


                    <div className="form-row">
                        <TextInput
                            className="form-group"
                            value={businessName}
                            id="Business Name"
                            name="text"
                            placeholder="Business Name " />

                        <TextInput
                            className="form-group "
                            value={email}
                            id="email"
                            placeholder="Email"
                            name="email"
                        />

                    </div>

                    <div className="form-row">
                        <TextInput
                            className="form-group "
                            name="text"
                            value={phone}
                            id="phone-Number"
                            placeholder="Phone-Number" />

                        <TextInput
                            name="fax"
                            className="form-group"
                            value={fax}
                            id="Fax"
                            placeholder="Fax" />
                    </div>

                    <div className="form-row">
                        <Textarea
                            name="textarea"
                            id="textarea"
                            placeholder="short-description"
                            value={textarea}

                        />
                    </div>
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
                            // className="form-group "
                            name="location"
                            value={location}
                            id="locations"
                            placeholder="location" />


                    </div>
                    <div className="form-group ">
                        <iframe height="248px" frameBorder={0} className="form-control" scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=1200&height=482.89&hl=en&q=Ahmadu%20Bello%20Way,%20Gudu,%20Abuja.%20Abuja+(Iya%20basira)&t=&z=15&ie=UTF8&iwloc=B&output=embed" />
                    </div>
                    <button type="submit" className="btn btn-lg btn-warning"> Update My Info</button>
                </form>
            </div >
        </div >


    )
}
