import React ,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { deleteContact } from "./../.././components/reducer/action";


 function ViewDocs({shows}) {
    const users = useSelector(state => state.userReducer.contacts[0])
    const uploadfile = useSelector(state => state.userReducer.Uploads)
    const {businessName } = users;
  const dispatch= useDispatch()
 
const onDeleteClick = () => {
 dispatch(deleteContact())
  }
    return (
       
        <>
         
{shows? null          
: 
uploadfile.map((file,index)=>{
  const {title,description,image}= file;
  // console.log(index)
  if(file===null){
  return(

    
    <ul> 
      <div className=" col-10 mx-auto card mb-3" id="forza">



      alert("love")
    </div>
    </ul>
    
  )
  }else{
  return(

  <ul key={index} style={{listStyle:"none"}}>
      
  
<li>
<div className=" col-10 col-lg-6 col-md-6 mx-auto card mb-3" id="forza">
<div className="d-flex justify-content-center  row no-gutters">
    <div className="col-md-4 mb-0 align-self-center" id="marko">
        <img src={image} className="card-img" alt="image" />
        
    </div>
    <div className="col-md-8">
        {/* <div className="card-header"> */}
        <h5 className="card-title p-3">{title}</h5>
          {/* </div> */}
        <div className="card-body">
            <p className="card-text">{description}</p>
            <p className="card-text"><strong className="text-muted">{businessName}</strong></p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <div className=" d-flex col-4">

            <button  type="button" className="btn btn-danger p-2" onClick={ onDeleteClick.bind(title)}>Delete</button>
            </div>

        </div>
    </div>
</div>
</div>

</li>
  </ul>
  ) }
})

}
   
</>
    )
}

export default ViewDocs