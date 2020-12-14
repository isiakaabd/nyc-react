import React, { useEffect } from 'react'
import { editRecord } from '../action'
import { connect } from "react-redux"
import "../Userpage/../../../components/css/userpage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';

function Buttons({ editRecord, buttons }) {


    useEffect(() => {
        editRecord()
    }, [editRecord])



    return (

        buttons.map((button, index) => {

            return <Button
                key={index}
                button={button}

            />
        })
    )
}

const MapStateToProps = (state) => {
    return {
        buttons: state.userReducer.contacts
    }
}
const MapDispatchToProps = dispatch => {
    return {
        editRecord: () => dispatch(editRecord())
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Buttons)