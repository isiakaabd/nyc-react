import React from 'react';
import { connect } from "react-redux";
import { editRecord } from '../reducer/action'

function Notification(props) {
    const { businessName } = props.sidebarValue

    return (


        <>

            <div className="container">

                <div className="col-11 col-md-12 col-lg-12 py-4 ml-0  mx-auto">
                    <h4 className="text-left text-nowrap mx-auto" >Notifications</h4>
                    <div className="d-flex flex-wrap col-12 col-md-12 col-lg-12" style={{ alignItems: 'center', background: '#686868', boxShadow: '0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(55.63px)', borderRadius: '10px' }}>

                        <div className="col-md-3 my-2  col-lg-3  py-3" >
                            <img src="/images/WomanFace2.png" className="d-flex" alt="placeholder" style={{ height: " 173px", width: "161px" }} />
                        </div>
                        <div className="col-10  mt-0 col-md-8 col-lg-8 m-0">

                            <p style={{ fontSize: '18px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '27px', letterSpacing: '0px', textAlign: 'left', color: '#FFFFFF' }}>{businessName} is live on NYC</p>
                            <h3 className="m-0" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', marginLeft: '2rem', lineHeight: '21px', color: '#FFFFFF' }}>Welcome. <br /><br />All necessary and required messages and notifications would fall in here, promos and offers also.</h3>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}


const MapStateToProps = (state) => {
    return {
        sidebarValue: state.userReducer.contacts[0]
    }
}
const MapDispatchToProps = dispatch => {
    return {
        sidebarAction: () => dispatch(editRecord())
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Notification)