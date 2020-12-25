import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from 'react'
import UploadDoc from "../components/reducer/Userpage/modal/UploadDoc";
import "../components/css/sidebar.css"
export default function NavBar() {
    return (
        <>
            <Router>
                <Sidebar />
                <Switch>



                </Switch>
            </Router>
        </>
    )
}

