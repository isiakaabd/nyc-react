import React, { useEffect } from 'react';
import Sidebar from "./Sidebar"
import { connect } from "react-redux";
import { editRecord } from '../components/reducer/action'

function SidebarRedux({ sidebarAction, sidebarValue }) {


    useEffect(() => {
        sidebarAction()
    }, [editRecord])



    return (

        sidebarValue.map((user, index) => {

            return <Sidebar
                key={index}
                user={user}

            />
        })
    )
}

const MapStateToProps = (state) => {
    return {
        sidebarValue: state.userReducer.contacts
    }
}
const MapDispatchToProps = dispatch => {
    return {
        sidebarAction: () => dispatch(editRecord())
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(SidebarRedux)