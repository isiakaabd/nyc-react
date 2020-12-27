import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai"
import * as faIcons from "react-icons/fa"
import { Link } from 'react-router-dom'
import { sideBarData } from './SideBarData'


export default function Sidebar() {
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
                <ul className=" nav-menu-items  " onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose className="menu-bars-item" />
                        </Link>

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
