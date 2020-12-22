import '../../../components/css/button.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch, } from 'react-redux'
import { editRecord, uploadDoc } from '../action';
import React from 'react';
import { Link } from "react-router-dom"
import Modals from './modal/Modal';
import UploadDoc from './modal/UploadDoc';




function Button() {

    const users = useSelector(state => state.userReducer.contacts[0])
    console.log(users)

    const { businessName } = users

    const dispatch = useDispatch()
    // dispatch(editRecord)
    return (
        <div className=" col-4 col-md-3  d-none d-md-block d-lg-block">



            <div className="sub-container ">
                <input type="image" style={{ width: "150px" }} src="/images/arimoro.jpeg" className="imageDisplay" id="imageDisplay" />
                <h3 id="Name" style={{ fontWeight: 900, fontFamily: 'ubuntu' }}  > {businessName}</h3>
                <button type="button" className="btn btn-default btn-block"><a href="#">View Profile</a></button>
            </div>

            <div className="list-group">
                <button type="button"

                    onClick={() => dispatch(editRecord())}
                    className="list-group-item list-group-item-action"><img src="/images/edit.svg" className="svg" alt="profile" />
                    <a onClick={(e) => { e.preventDefault() }} href="#">Edit record</a>

                </button>

                <button type="button" className="list-group-item list-group-item-action"><img className="svg" src="/images/package.svg" alt="svg" /><a href="# ">Select/Update Package</a></button>
                <button type="button" className="list-group-item list-group-item-action"> <img className="svg" src="/images/stats.svg" alt="svg" /><a href="# ">Stats</a></button>
                <button type="button" className="list-group-item list-group-item-action"> <img className="svg" src="/images/management.svg" alt="svg" /><a onClick={(e) => { e.preventDefault() }} href="# ">Manage Ads</a></button>
                <button type="button" className="list-group-item list-group-item-action "> <img className="svg" src="/images/Celebrate.svg" alt="svg" /><a onClick={(e) => { e.preventDefault() }} href="# ">Events</a></button>


                <button
                    type="button"
                    onClick={() => dispatch(editRecord())}
                    className="list-group-item list-group-item-action "
                ><img className="svg" src="/images/upload.svg" alt="svg" /><a onClick={(e) => { e.preventDefault() }} href="# ">Upload Documents</a>
                </button>


                <button

                    type="button" className="list-group-item list-group-item-action"><img className="svg" src="/images/notification.svg" alt="svg" /><a onClick={(e) => { e.preventDefault() }} href="# ">Notifications/ Inbox</a></button>

                <button type="button" className="list-group-item list-group-item-action "> <img className="svg" src="/images/settings.svg" alt="svg" /><a onClick={(e) => { e.preventDefault() }} href="# ">Settings</a></button>
                <button type="button" className="list-group-item list-group-item-action "> <img className="svg" src="/images/logout.svg" alt="svg" /><a onClick={(e) => { e.preventDefault() }} href="# ">logout</a></button>
            </div>


        </div>

    )
}
export default Button
//