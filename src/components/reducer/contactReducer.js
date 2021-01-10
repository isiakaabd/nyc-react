import {
  EDIT_RECORD,
  GET_CONTACTS,
  STATE_MODAL,
  UPLOAD_RECORD,
<<<<<<< HEAD
  LOGIN_USER,
  UPLOAD
=======
  SIGNUP_USER,
  FETCH_FAQ
>>>>>>> 5316d82d2a421167f3199da20922ea71ddd840af
} from "./type";

const initialState = {
  contacts: [
    {
      businessName: "REMLAD VENTURES",
      website: "https:// www.remlad.com",
      email: "isiakaabd@gmail.com",
      phone: "07033637349",
      textarea: " i love you",
      location: "osun",
      fax: "737-25-23456",
      category: "technology",
      state: "osun",
    },
    {
      businessName: "REMLAD VENTURES",
      website: "https:// www.remlad.com",
      email: "isiakaabd@gmail.com",
      phone: "070336373495",
      textarea: " i love you",
      location: "osun",
      fax: "737-25-23456",
      state: "osun",
    },
  ],
  modal: true,
  users: [],
<<<<<<< HEAD
  uploadDoc:[]
=======
  faq: [],
>>>>>>> 5316d82d2a421167f3199da20922ea71ddd840af
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case EDIT_RECORD:
      return {
        ...state,
        contacts: state.contacts,
        modal: !state.modal,
      };
    case UPLOAD_RECORD:
      return {
        ...state,
        contacts: action.payload,
        modal: !state.modal,
      };
    case STATE_MODAL:
      return {
        ...state,
        modal: state.modal,
      };
    case FETCH_FAQ:
      return {
        ...state,
        faq: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPLOAD:
      return {
        ...state,
        uploadDoc:[...state.uploadDoc, action.payload]
  
      };
    default:
      return state;
      

        } 
      
}   ;
export default reducer;
