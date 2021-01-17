import axios from "axios";
import swal from 'sweetalert';
// import useEffect from "react";
// import useFetch from "./usage"
// import { Redirect } from "react-router-dom";
import { EDIT_RECORD, GET_CONTACTS, STATE_MODAL, SIGNUP_USER, FETCH_FAQ ,UPLOADS,DELETE_CONTACT,ADVERT,LOGIN_USER,FETCH_BUSINESS} from "./type";


export const getContacts = () => {
  return async (dispatch) => {
    const users = await axios.get("https://naija-yellow-catalogue.herokuapp.com/contact");
    dispatch({
      type: GET_CONTACTS,
      payload: users.data,
    })
    if (users.data) {
      swal({
        title: "Thanks",
        text: "We have received your details",
        icon: "success",
        button: "Ok",
      })
    }
  };
};

export const editRecord = (form) => {
  return {
    type: EDIT_RECORD,
     payload: form,
  };
};

export const editUsers  = (id) => {
 
  return async (dispatch) => {

    try {

        await axios.post
            ("https://naija-yellow-catalogue.herokuapp.com/api/users/profile/", {id})
        dispatch({
            type: EDIT_USERS,
            payload: id
        }
        )
    } catch (e) {

        dispatch({
            type: EDIT_USERS,
            payload: id
        }
        )
      }
    }
  }
// export const editUsers = (form) => {
 
//   console.log("action")

//   return (dispatch) => {
//   fetch("https://naija-yellow-catalogue.herokuapp.com/api/users/profile/", 
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(form),
//   })
//   .then((resp) => 
//   {
// console.log(resp)    
// return resp.json()})

//     .then((post) => {
//       console.log(post)
//       if(post.status===200){

//         swal({
//           title: "Congratulations!",
//           text: "You have Registered Successfully",
//           icon: "success",
//           button: "Proceed",
//         })

//         dispatch({
//           type: EDIT_USERS,
//      payload: post,
  
//         })
//       }else {
//         swal({
//           title: "Error!",
//           text: "Oops, there was an error",
//           icon: "warning",
//           button: "Ok",
//         })
//       }
      
//     })
// };
// }


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

// FUNCTION CONTROLLING THE SEARCH OF USERS
// export const getBusiness = () => {
//   return (dispatch) => {
//     fetch("https://naija-yellow-catalogue.herokuapp.com/api/company/search")
//     .then((resp) => resp.json())
//     .then((business) => 
//     dispatch({
//       type: FETCH_BUSINESS,
//       payload: business,
//     }))
//     .catch((err) => console.log("Request Failed", err)); // Catch errors
//    }
// }

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







export const signupUser = (userData) => {
  console.log("action")

  return (dispatch) => {
  fetch("https://naija-yellow-catalogue.herokuapp.com/api/signup", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
  .then((resp) => 
  {
console.log(resp)    
return resp.json()})

    .then((post) => {
      console.log(post)
      if(post.status===200){

        swal({
          title: "Congratulations!",
          text: "You have Registered Successfully",
          icon: "success",
          button: "Proceed",
        })

        dispatch({
          type: SIGNUP_USER,
          payload: post,
  
        })
      } else if(post.status === 400){

        
        swal({
          title: "Error!",
          text: post.message,
          icon: "warning",
          button: "Ok",
        })
 
      } else {
        swal({
          title: "Error!",
          text: "Oops, there was an error",
          icon: "warning",
          button: "Ok",
        })
      }
      
    })
    
      
    
  }
};


export const loginUser = (userData, action) => {

  return (dispatch) => {
  fetch("https://naija-yellow-catalogue.herokuapp.com/api/login/", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((resp) => 
    {
   
  return resp.json()})// convert response to json
    .then((post) => {
      console.log(post.data)  
        if (post.data){

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

        } else {

          swal({
            title: "Error!",
            text: "User not Registered",
            icon: "warning",
            button: "Ok",
          })
    
        }
      
     
      
    })
    .catch((error)=>{
      console.log(action)
      console.log(error)

        action.setSubmitting(false)
        if(error){
          console.log(error)
          if(error.status === 400){
            console.log('user does not exist')
          }
        }else{
          console.log('unexpected error')
        }
      })
    }
    

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