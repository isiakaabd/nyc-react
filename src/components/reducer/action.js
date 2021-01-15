import axios from "axios";
import swal from 'sweetalert';
// import { Redirect } from "react-router-dom";
import { EDIT_RECORD, GET_CONTACTS, STATE_MODAL, SIGNUP_USER, FETCH_FAQ ,UPLOADS,DELETE_CONTACT,ADVERT,LOGIN_USER} from "./type";


export const getContacts = () => {
  return async (dispatch) => {
    const users = await axios.get("https://naija-yellow-catalogue.herokuapp.com/contact");
    dispatch({
      type: GET_CONTACTS,
      payload: users.data,
    });
  };
};

export const editRecord = (form) => {
  return {
    type: EDIT_RECORD,
     payload: form,
  };
};

// export const uploadDoc = () => {
//   return {
//     type: EDIT_RECORD,
//   };
// };

export const stateModal = (dispatch) => {
  dispatch({
    type: STATE_MODAL,
    
  });
};

// Upload doc action
export const Uploads = (form) => {
  return {
    type:  UPLOADS,
    payload:form
  };
};


export const advert = (item) => {
  return async (dispatch) => {
    const users = await axios.post
        ("https://naija-yellow-catalogue.herokuapp.com/adverts/", item)
        console.log(users)
        dispatch({
        type: ADVERT,
        payload: users.data
    }
    )
    if (item) {
      return swal({
        title: "Great job!",
        text: "Document Uploaded Successfully",
        icon: "success",
        button: "Proceed",
      })
    }
    }
}

;




// FUNCTION CONTROLLING FAQ ACTION
export const fetchFaq= () => {
  return (dispatch) => {
    axios('https://naija-yellow-catalogue.herokuapp.com/faq', {
      headers: {
        "content-type": "application/json",
      }
    })
    .then((resp) => resp.json())
    .then((faqs) => 
    dispatch({
      type: FETCH_FAQ,
      payload: faqs,
    }))
    .catch((err) => console.log("Request Failed", err)); // Catch errors
   }
  };



// FUNCTION CONTROLLING SIGNUP ACTION
// export const signupUser = userData => {
//   return (dispatch) => {
//     axios.post('https://naija-yellow-catalogue.herokuapp.com/signup', { userData })
//     .then(response => {
//       console.log(response);
//       dispatch ({
//         type: SIGNUP_USER,
//         payload: response.data
//       })
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// }




export const signupUser = (userData) => {
  console.log("action")

  return (dispatch) => {
  fetch("https://naija-yellow-catalogue.herokuapp.com/signup", 
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    // .then((resp) => resp.json())
    .then((post) => {
      dispatch({
        type: SIGNUP_USER,
        payload: post,

      })
      
    }
    )
    if (userData) {
      return swal({
        title: "Great job!",
        text: "You have Registered Successfully",
        icon: "success",
        button: "Proceed",
      })
      
      // .then(
      //   window.location.reload()
      // );
      
    }
  }
};


export const loginUser = (userData) => {

  // return (dispatch) => {
  // fetch("https://naija-yellow-catalogue.herokuapp.com/login/", 
  // {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(userData),
  // })
  //   .then((resp) => resp.json())
  //   .then((post) => {

  //     swal({
  //       title: "Awesome!",
  //       text: "Login Successful",
  //       icon: "success",
  //       button: "Proceed",
  //     })

  //     localStorage.setItem("token", JSON.stringify(post.Token))
  //     localStorage.setItem("user", JSON.stringify(post.data))
  //       dispatch({
  //         type: LOGIN_USER,
  //         payload: post,
  
  //       })
       
      
  //   }
  //   )
  //   }
  return {
    type:  LOGIN_USER,
    payload:userData
  };
    


  }




export const deleteContact = (id) => {
 
  return async (dispatch) => {

    try {

        await axios.delete
            (`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        }
        )
    } catch (e) {

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        }
        )
      }
    }
  
}