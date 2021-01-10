import {
  EDIT_RECORD,
  GET_CONTACTS,
  STATE_MODAL,
  UPLOAD_RECORD,
  SIGNUP_USER,
  FETCH_FAQ
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
  faq: [],
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
    default:
      return state;
  }
};
export default reducer;
