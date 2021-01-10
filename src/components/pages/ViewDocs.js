import React from 'react'
import { useSelector } from 'react-redux'
export default function ViewDocs({shows, handleShows }) {

    
    const users = useSelector(state => state.userReducer.contacts[0])
    const {businessName } = users;
    return (

        <>
{shows? 
            <div className="card mb-3" id="forza">
                <div className="row no-gutters">
                    <div className="col-md-4" id="marko">
                        <img src="${adsPost[i].image}" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text">You</p>
                            <p className="card-text"><strong className="text-muted">{businessName}</strong></p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button" lassName="btn btn-primary" onClick={handleShows}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
:null}
        </>
    )
}
