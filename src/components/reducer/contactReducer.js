import { EDIT_RECORD, GET_CONTACTS, STATE_MODAL } from "./type"

const initialState = {
    contacts: [{
        "businessName": "REMLAD VENTURES",
        "website": "https:// www.remlad.com",
        "email": "isiakaabd@gmail.com",
        "phone": "07033637349",
        "textarea": " i love you",
        "location": "osun",
        "fax": "737-25-23456",
        "category": "technology",
        "state": "osun"

    }, {
        "businessName": "REMLAD VENTURES",
        "website": "https:// www.remlad.com",
        "email": "isiakaabd@gmail.com",
        "phone": "070336373495",
        "textarea": " i love you",
        "location": "osun",
        "fax": "737-25-23456",
        "state": "osun"

    }],
    modal: true,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case EDIT_RECORD:
            return {
                ...state,
                contacts: state.contacts
            }
        case STATE_MODAL:
            return {
                ...state,
                modal: state.modal

            }
        default:
            return state
    }
}
export default reducer
