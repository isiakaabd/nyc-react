import axios from "axios";
import swal from 'sweetalert';
// import { Redirect } from "react-router-dom";
import { EDIT_RECORD, GET_CONTACTS, STATE_MODAL, SIGNUP_USER, LOGIN_USER, FETCH_FAQ ,UPLOADS,DELETE_CONTACT} from "./type";
import UploadDoc from "./Userpage/modal/UploadDoc";

export const getContacts = () => {
  return async (dispatch) => {
    const users = await axios.get("https://naija-yellow-catalogue.herokuapp.com/contact");
    dispatch({
      type: GET_CONTACTS,
      payload: users.data,
    });
  };
};

export const editRecord = () => {
  return {
    type: EDIT_RECORD,
    payload: UploadDoc,
  };
};

export const uploadDoc = () => {
  return {
    type: EDIT_RECORD,
  };
};

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

      console.log(post)

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
      }).then(
        window.location.reload()
      );
      
    }
  }
};


export const loginUser = (userData) => {

  return (dispatch) => {
  fetch("https://naija-yellow-catalogue.herokuapp.com/login", 
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((resp) => resp.json())
    .then((post) => {

      swal({
        title: "Awesome!",
        text: "Login Successful",
        icon: "success",
        button: "Proceed",
      })

      localStorage.setItem("token", JSON.stringify(post.Token))
      localStorage.setItem("user", JSON.stringify(post.data))
      
   

        dispatch({
          type: LOGIN_USER,
          payload: post,
  
        })
       
      
    }
    )
    }
    

 
  }






export const deleteContact = (id) => {
  // return async (dispatch) => {

  //     try {

  //         await axios.delete
  //             (`https://jsonplaceholder.typicode.com/users/${id}`)
  //         dispatch({
  //             type: DELETE_CONTACT,
  //             payload: id
  //         }
  //         )
  //     } catch (e) {
console.log(id)
          // dispatch({
            return{
              type: DELETE_CONTACT,
              payload: id
          }
  //       }

  //     }




  // }
}