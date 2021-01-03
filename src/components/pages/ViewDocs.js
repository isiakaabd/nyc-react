import React from 'react'

export default function ViewDocs() {

    return (

        <>

            <div className="card mb-3" id="forza">
                <div className="row no-gutters">
                    <div className="col-md-4" id="marko">
                        <img src="${adsPost[i].image}" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">HI</h5>
                            <p className="card-text">You</p>
                            <p className="card-text"><strong className="text-muted">${'{'}userInfo[i].businessName{'}'}</strong></p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button c" lassName="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
