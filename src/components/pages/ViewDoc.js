import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { deleteContact } from "./../.././components/reducer/action";


 function ViewDoc({adshows}) {
    const users = useSelector(state => state.userReducer.contacts[0])
    const advertfile = useSelector(state => state.userReducer.adverts)
    const {businessName } = users;
  const dispatch= useDispatch()

 const onDeleteClick = id => {
   dispatch(deleteContact(id))

  };
    return (
       
        <>
         
{adshows? null          
: 
advertfile.map((file,index)=>{
  return(
  <ul style={{listStyle:"none"}}>
      
  
<li key={index}>
<div className=" col-10 mx-auto card mb-3" id="forza">
<div className="d-flex justify-content-center row no-gutters">
    <div className="col-md-4 mb-0 " id="marko">
        <img src={file.flyer} className="card-img" alt="image" />
    </div>
    <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{file.title}</h5>
            <p className="card-text">{file.description}</p>
            <p className="card-text"><strong className="text-muted">{businessName}</strong></p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            <div className=" d-flex col-4">

            <button type="button" className="btn btn-primary p-2" onClick={onDeleteClick}>Delete</button>
            </div>

        </div>
    </div>
</div>
</div>

</li>
  </ul>
  ) 
})

}
        </>
    )
}

export default ViewDoc