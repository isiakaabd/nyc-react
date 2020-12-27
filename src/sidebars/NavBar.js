import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import React, { useEffect } from 'react'
import UploadDoc from "../components/reducer/Userpage/modal/UploadDoc";
import Userpage from "../components/reducer/Userpage/Userpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/css/sidebar.css";
import { useSelector, useDispatch } from 'react-redux'
import "../components/css/userpage.css"
import { stateModal } from "../components/reducer/action";



export default function NavBar() {
    const RouterSideNavBAr = withRouter(Sidebar)
    // const state = useSelector(state => state.userReducer.modal)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(stateModal)
    // }, [dispatch])

    return (


        <>

            <Router>
                <div className="d-flex flex-wrap ">

                    <div>
                        <RouterSideNavBAr />
                    </div>




                    <Switch>

                        <div>
                            {/* {state ? < Userpage /> : null} */}
                            <Route path="/upload-documents" exact component={UploadDoc} />
                            <Route path="/nav/edit" exact component={Userpage} />

                        </div>
                    </Switch>
                </div>
            </Router>

        </>
    )
}

