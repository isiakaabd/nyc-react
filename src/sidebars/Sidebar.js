import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import * as AiIcons from "react-icons/ai"
import * as faIcons from "react-icons/fa"
import { Link } from 'react-router-dom'
import { sideBarData } from './SideBarData'


export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => {
        console.log(sidebar)
        setSidebar(!sidebar)
    }
    return (

        <>


            <div className="position-relative">


                <div className="navbar  col-4 col-md-3 bg-warning d-flex justify-content-start align-items-center ">
                    <Link to="#" className="menu-bars ml-2 bg-none h3 ">
                        <faIcons.FaBars onClick={showSideBar} />
                    </Link>

                </div>
                <nav className={sidebar ? "nav-menu active col-4 col-md-3 col-lg-2  ml-0" : "nav-menu col-4 col-md-3 col-lg-2  ml-0"}>
                    <ul className=" nav-menu-items list-group">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>

                        </li>


                        {sideBarData.map((sidebars, index) => {
                            return (
                                <li key={index} className={sidebars.classname}>
                                    <Link to={sidebars.path}>
                                        {sidebars.icon}
                                        <span>{sidebars.title}</span>
                                    </Link>
                                </li>
                            )
                        })}


                    </ul>
                </nav>
            </div>
        </>
    )
}
