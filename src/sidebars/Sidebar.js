import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai"
import * as faIcons from "react-icons/fa"
import { Link } from 'react-router-dom'
import { sideBarData } from './SideBarData';
import { connect } from "react-redux";
import { editRecord } from '../components/reducer/action';



function Sidebar(props) {


    const { businessName } = props.sidebarValue
    const [sidebar, setSidebar] = useState(true)
    const showSideBar = () => {
        setSidebar(!sidebar)
    }


    return (

        <>





            <div className="navbars ">
                <Link to="#" className="menu-bars   h3 ">
                    <faIcons.FaBars onClick={showSideBar} />
                </Link>

            </div>
            <main className={sidebar ? "nav-menu active " : "nav-menu "}>
                <ul className=" nav-menu-items" >
                    <li className="navbar-toggle" onClick={showSideBar}>
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose className="menu-bars-item" />
                        </Link>

                    </li>
                    <li className=" side-box d-none  d-lg-block ">


                        <div className="sidebar-image d-flex  flex-column justify-content-center align-items-center my-4">
                            <input type="image" style={{ width: "150px", height: "150px" }} alt="profile_image" src="/images/arimoro.jpeg" className=" rounded-circle imageDisplay align-self-center" id="imageDisplay" />
                            <h3 id="Name" className="text-nowrap" style={{ fontWeight: 900, fontFamily: 'ubuntu', fontSize: "14px", textAlign: "center" }} > {businessName} </h3>
                            <button type="button" className=" btns btn btn-warning btn-block"><Link to="/" className=" w-75 mx-auto text-decoration-none text-white text-nowrap text-left" >View Profile</Link></button>

                        </div>

                    </li>

                    {sideBarData.map((sidebars, index) => {
                        return (
                            <li key={index}
                                className={sidebars.classname}
                                id={window.location.pathname === sidebars.path ? "active" : ""}
                            >
                                <Link to={sidebars.path}>
                                    {sidebars.icon}
                                    <span>{sidebars.title}</span>
                                </Link>
                            </li>
                        )
                    })}


                </ul>
            </main>

        </>
    )
}
const MapStateToProps = (state) => {
    return {
        sidebarValue: state.userReducer.contacts[0]
    }
}
const MapDispatchToProps = dispatch => {
    return {
        sidebarAction: () => dispatch(editRecord())
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Sidebar)