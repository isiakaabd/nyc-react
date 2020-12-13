import axios from "axios"

import { EDIT_RECORD, GET_CONTACTS, STATE_MODAL } from "./type"



export const getContacts = () => {

    return async (dispatch) => {
        const users = await axios.get
            ("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type: GET_CONTACTS,
            payload: users.data
        }
        )
    }
}

export const editRecord = () => {

    return {
        type: EDIT_RECORD,

    }

}

export const stateModal = (dispatch) => {

    dispatch({
        type: STATE_MODAL

    }
    )
}
