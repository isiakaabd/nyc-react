import React, { useEffect } from 'react'
import { editRecord } from '../action'
// import Userpage from './Userpage2'
import { connect } from "react-redux"
import "../Userpage/../../../components/css/userpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Userpage from './modal/Userpage2';

function Users({ editRecord, Users }) {


    useEffect(() => {
        editRecord()
    }, [editRecord])



    return (

        Users.map((user, index) => {

            return <Userpage
                key={index}
                user={user}

            />
        })
    )
}

const MapStateToProps = (state) => {
    return {
        Users: state.userReducer.users
    }
}
const MapDispatchToProps = dispatch => {
    return {
        editRecord: () => dispatch(editRecord())
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Users)