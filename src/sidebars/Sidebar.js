import React, { useState } from 'react'
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





            <div className="navbars ">
                <Link to="#" className="menu-bars   h3 ">
                    <faIcons.FaBars onClick={showSideBar} />
                </Link>

            </div>
            <navs className={sidebar ? "nav-menu active " : "nav-menu "}>
                <ul className=" nav-menu-items  " onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>

                    </li>


                    {sideBarData.map((sidebars, index) => {
                        return (
                            <li key={index}
                                className={sidebars.classname}
                                id={window.location.pathname == sidebars.path ? "active" : ""}
                            >
                                <Link to={sidebars.path}>
                                    {sidebars.icon}
                                    <span>{sidebars.title}</span>
                                </Link>
                            </li>
                        )
                    })}


                </ul>
            </navs>

        </>
    )
}
