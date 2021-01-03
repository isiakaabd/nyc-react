import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from 'react'
import UploadDoc from "../components/reducer/Userpage/modal/UploadDoc";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/css/sidebar.css";

import Userpage from "../components/reducer/Userpage/modal/Userpage2";
import ManageAds from "../components/pages/ManageAds";




export default function NavBar() {
    const RouterSideNavBAr = withRouter(Sidebar)

    return (


        <>

            <Router>
                <div className="d-flex flex-wrap ">

                    <div>
                        <RouterSideNavBAr />
                    </div>




                    <Switch>

                        <div className="mx-auto">

                            <Route path="/userpage/" exact component={Userpage} />
                            <Route path="/userpage/upload" exact component={UploadDoc} />
                            <Route path="/userpage/ManageAds" exact component={ManageAds} />


                        </div>
                    </Switch>
                </div>
            </Router>

        </>
    )
}

