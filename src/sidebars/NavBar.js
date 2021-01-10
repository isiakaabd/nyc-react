import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from 'react'
import UploadDoc from "../components/reducer/Userpage/modal/UploadDoc";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/css/sidebar.css";
import Userpage from "../components/reducer/Userpage/modal/Userpage2";
import ManageAds from "../components/pages/ManageAds";
import Notification from "../components/pages/Notification";
import ViewDocs from "../components/pages/ViewDocs";



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
                            <Route path="/userpage/Notifications" exact component={Notification} />
                            <Route path="/userpage/view" exact component={ViewDocs} />


                        </div>
                    </Switch>
                </div>
            </Router>

        </>
    )
}

