import React, { useState,useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInput from '../../../layout/userpageInput/TextInput';
import Textarea from '../../../layout/userpageInput/Textarea';
import SelectInputValue from '../../../layout/userpageInput/SelectInput';
import "../../../css/userpage.css"
import { Link } from 'react-router-dom';
import {loginUser} from "../../action"



export default function Userpage() {



    const userInfo = useSelector(state => state.userReducer.users[0])

const dispatch =useDispatch()
// useEffect(() => {
//     dispatch(loginUser())
   
// }, [])

    // let userInfo = JSON.parse(localStorage.getItem("user"));


    const [USerstate , setUSerstate] = useState({
        phone:userInfo.phone, 
        businessName:userInfo.businessName, 
        email:userInfo.email, 
        website:userInfo.website, 
        textarea:userInfo.textarea, 
        location:userInfo.location, 
        fax:userInfo.fax,
        state:userInfo.state,
        category:userInfo.category 
    });
    const { phone, businessName, email, website, textarea, location, fax, state, category } = USerstate;

 function onChange (e) {
        
        const { name, value } = e.target
        console.log(value)
        setUSerstate({...USerstate, [name]:value })



    }
   const onSubmit=(e)=>{
        e.preventDefault()

        const form = {
            phone,
            businessName, 
            email, 
            website, 
            textarea, 
            location, 
            fax,
            state,
            category
        }
        console.log(form)
        dispatch(loginUser(form))
   }

    return (

        <div className=" container-fluid  mx-auto my-5" style={{ width: "1000px" }}>
            <div className="col-11 col-md-12 col-lg-12 mx-auto">
                <div className=" d-sm-block  d-md-none d-lg-none col-8 mx-auto col-sm-6   d-flex  flex-column justify-content-center align-items-center" >
                    <input type="image" style={{ width: "150px", height: "150px" }} alt="profile_image" src="/images/arimoro.jpeg" className=" rounded-circle imageDisplay align-self-center" id="imageDisplay" />
                    <h3 id="Name" className="text-nowrap" style={{ fontWeight: 900, fontFamily: 'ubuntu', fontSize: "14px", textAlign: "center" }} > {businessName} </h3>
                    <button type="button" className="  btn btn-warning btn-block"><Link to="/" className="text-decoration-none text-white text-nowrap text-left" >View Profile</Link></button>

                </div>
                <div className="d-none col-lg-5 mr-auto   d-lg-flex flex-column flex-nowrap">
                    <div style={{ width: '100%' }}>

                        <h2 className="text-nowrap">Upload Photos</h2>
                    </div>
                    <aside className="span d-flex flex-nowrap justify-content-between mb-0">
                        <h4 className="align-self-center">Upload profile or Logo  </h4>
                        <i className="  align-self-center text-white h-100 fa fa-exclamation-circle fa-2x" />
                        <i className=" text-white fas fa-upload fa-2x" />
                    </aside>
                    <div className=" fine col-lg-12" style={{ height: '200px', background: '#ebebe0' }}>
                        <form style={{ width: '300px' }}>
                            <div style={{ width: '300px' }} className="custom-file">
                                <input style={{ width: "150px" }} type="file" className="custom-file-input" name="filename" id="customFile" accept="image/gif, image/jpeg, image/png" />
                            </div>
                        </form>
                        <h2>Or drag your file here to upload</h2>
                        <i className="fas fa-cloud-upload-alt fa-5x" />
                    </div>
                </div>

                <div>
                    <div className=" mt-4 col-11 col-md-10 col-lg-10 mr-auto" >


                        <form onSubmit={onSubmit} className=" mx-auto"  >


                            <div className="form-row">
                                <TextInput
                                    className="form-group"
                                    value={businessName}
                                    id="Business Name"
                                    name="text"
                                    onChange={onChange}
                                    placeholder="Business Name " />

                                <TextInput
                                    className="form-group "
                                    value={email}
                                    onChange={onChange}
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
                                    onChange={onChange}
                                    placeholder="Phone-Number" />

                                <TextInput
                                    name="fax"
                                    className="form-group"
                                    onChange={onChange}
                                    value={fax}
                                    id="Fax"
                                    placeholder="Fax" />
                            </div>

                            <div className="form-row">
                                <Textarea
                                    name="textarea"
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}

                                >
                                    <option defaultValue={category} >{category}</option>
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
                                    onChange={onChange}
                                    name="url"
                                    value={website}
                                    id="url"
                                    placeholder="url" />


                                <TextInput
                                    onChange={onChange}
                                    name="location"
                                    value={location}
                                    id="locations"
                                    placeholder="location" />


                            </div>
                            <div className="form-group ">
                                <iframe height="248px" frameBorder={0} className="form-control" title="location" scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=1200&height=482.89&hl=en&q=Ahmadu%20Bello%20Way,%20Gudu,%20Abuja.%20Abuja+(Iya%20basira)&t=&z=15&ie=UTF8&iwloc=B&output=embed" />
                            </div>
                            <button type="submit" className="btn btn-lg btn-warning"
                                onClick={() => alert(JSON.stringify(USerstate))}> Update My Info</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
