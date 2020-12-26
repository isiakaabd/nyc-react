import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from 'react'
import UploadDoc from "../components/reducer/Userpage/modal/UploadDoc";
import Userpage from "../components/reducer/Userpage/Userpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/css/sidebar.css"

export default function NavBar() {

    return (
        <>
            <Router>
                <div className="d-flex flex-wrap ">
                    {/* <div className="col-6 col-md-4 col-lg-4"> */}
                    <div>
                        <Sidebar />
                    </div>




                    <Switch>
                        {/* <div className="col-9 col-md-7 col-lg-7"> */}
                        <div>
                            <Route path="/upload-documents" exact component={UploadDoc} />
                            <Route path="/nav/edit" exact component={Userpage} />

                        </div>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

