
import React, { useState }  from 'react'
import { Button, Modal } from "react-bootstrap";
import { advert } from "./../reducer/action";
import { connect } from "react-redux";



function ModalAds({ adshow, handleAdshow,modalAdsAction}) {
    const [state, setstate] = useState({
        title:"",
        description: "",
        flyer: ""
    })
    
    const onChange=(e)=>{
        setstate({...state, [e.target.name]: e.target.value})
    }
       const imageLoaders=(e)=>{
           const reader= new FileReader()
           reader.onload=()=>{
               if (reader.readyState===2){
                //    console.log(reader.result)
                setstate({...state,flyer:reader.result})
               }
           }
           reader.readAsDataURL(e.target.files[0])
        }

        //lo
        const onSubmit=(e)=>{
            const {title, description, flyer } = state;
            e.preventDefault()
            const item = {
    
                title,
                description ,
                flyer
            }
            
    //// SUBMIT advert ////
            modalAdsAction(item)
    
             // Clear State
        setstate({
            title: "",
            description: "",
            flyer:""
          });
        }
     
        return (
            <>
                <Modal show={adshow} onHide={handleAdshow}>
                    <Modal.Header closeButton>
                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#8f8f8f' }}>Create Advertisement
</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit= {onSubmit }   >
                            <div className="form-group">
                                <label htmlFor="recipient-name" style={{ color: '#8f8f8f' }}>Advert Title</label>
                                <input type="text" required value={state.title} name="title" onChange={onChange} className="form-control" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                            </div>
                            {/* <div className="form-group">
                            <label htmlFor="message-text" >Description</label>
                            <input type="text" className="form-control" id="description" required value={state.description} name="description"  onChange={onChange} style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                             </div> */}
                            <div className="form-group">
                                
                                <label
                                    htmlFor="recipient-name"
                                    style={{ color: '#8f8f8f' }}
                                >
                                    Flyer
                                </label>
                                
                                <div className="container-fluid" style={{height:"230px"}}>

    

<div style={{ height: "inherit", borderRadius: '5px', border: '3px dashed #c4c4c4' }} className="custom-file">
    {/* <div className="custom-file" id="change" > */}
        <input
            id="uploadDoc"
            type="file"
            style={{ height: "inherit", cursor: 'pointer',width: "100%"}}
            className="custom-file-input"
            name="filename"
            multiple
            onChange={imageLoaders}
            accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png, .txt"
        />
    <div className="row"style={{height:"inherit !important", display: "flex",justifyContent: "center",width: "inherit",justifyItems: "center"}}> 
     <img
    alt=""
    src={state.flyer}
    id="document"
    style={{ maxWidth: '300px', height: '226px',margin:"auto",position:"absolute",top: "0",maxHeight: "inherit", width:"100%" }}
    />
    
 
    {/* </div> */}
</div>
</div>
</div>
<div
className="d-none"
// style={{ maxWidth: '400px', width: "inherit", height: '230px !important' , transform: "translate(0%, -90%)", margin: "auto" }}
>

    
    <div className="container">
<div className=" d-none d-lg-block" >
    <i className="fas fa-file-upload picCont" style={{ textAlign: 'center', color: '#c4c4c4', fontSize: '90px', }} />
    <p className=" picCont" style={{  color: 'red' }}>Drag or drop here</p>
    <p className="picCont" style={{  color: '#8f8f8f' }}>Browse files</p>
    <p className="picCont" style={{  color: '#8f8f8f' }}>Or</p>
</div>
</div>
    </div>
</div>
<div className="d-flex flex-nowrap justify-content-between">
<label htmlFor="message-text" style={{ fontSize: '14px', color: '#c4c4c4' }}>Accepted file types : .jpeg, .jpg, .png</label>
<span><i className="fas fa-lock" style={{ color: '#c4c4c4' }}> </i> Secure </span>
</div>
<div className="form-group">
<label htmlFor="message-text" >Description</label>
<input type="text" className="form-control" id="description" required value={state.description} name="description"  onChange={onChange} style={{ color: '#8f8f8f', borderRadius: '5px' }} />
</div>
                          
                        
    
    

              
                <Modal.Footer>
                    <Button
                        onClick={handleAdshow}
                        className="btn btn-secondary">
                        Cancel
                    </Button>
                    <input 
                    type="submit"
                        className="btn btn-primary" data-dismiss="modal" value  ="create" style={{ background: '#F8C800', border: '#F8C800', color: '#fff' }}/>
                    
                </Modal.Footer>
                </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
const MapDispatchToProps = dispatch => {
    return {
        modalAdsAction: (item) => dispatch(advert(item))
    }
}
export default connect(null, MapDispatchToProps)(ModalAds) 
