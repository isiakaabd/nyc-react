import React, { useState } from 'react'
import { Button, Container, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Uploads } from "../action";



function Modals({ show, handleShow, sidebarActions,sidebarValues }) {
  
    // function displayImage(event) { // display selected image function
    //     if (event.target.files.length > 0) {// get the image src and append it to the preview which is the default image holder
    //         let src = URL.createObjectURL(event.target.files[0]);
    //         let preview = document.getElementById("document");
    //         let cont = document.getElementById("picCont")
    //         preview.src = src;
    //         preview.style.display = "block";
    //         let a = document.getElementById("picCont")
    //         a.style.display = "none !important";
    //         // 
    //     }
    // }

    // function imageLoader(event) {
    //     displayImage(event)
    //     previewFile()
    // }
    // function previewFile() {
    //     const preview = document.querySelector('img');
    //     const file = document.querySelector('input[type=file]').files[0];
    //     const reader = new FileReader();

    //     reader.addEventListener("load", function () {
    //         // convert image file to base64 string
    //         let imgSrc = preview.src
    //         imgSrc = reader.result;

    //     }, false);

    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // }
const [imagestate, setimagestate] = useState("")


   const imageLoader=(e)=>{
       const reader= new FileReader()
       reader.onload=()=>{
           if (reader.readyState===2){
               console.log(reader.result)
            setimagestate(reader.result)
           }
       }
       reader.readAsDataURL(e.target.files[0])







//        let file= e.target.files
// const files= file[0]
// console.log(files)
// console.log(sidebarAction)

    }
    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#8f8f8f' }}>Upload Document</h5>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e)=>e.preventDefault()
                   }
                        >
                        <div className="form-group">
                            <label htmlFor="recipient-name" style={{ color: '#8f8f8f' }}>Title</label>
                            <input type="text" alt="" className="form-control" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                        </div>
                        <div className="form-group">
                            
                            <label
                                htmlFor="recipient-name"
                                style={{ color: '#8f8f8f' }}
                            >
                                Attach Document 
                            </label>
                            <div
                                style={{ height: '230px', borderRadius: '5px', border: '3px dashed #c4c4c4' }}
                                className="custom-file">
                                <div
                                    className="custom-file"
                                    id="change"
                                >
                                    <input
                                        id="uploadDoc"
                                        type="file"
                                        style={{ height: '250px', cursor: 'pointer' }}
                                        className="custom-file-input"
                                        name="filename"
                                        onChange={imageLoader}
                                        accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="d-flex flex-column "
                            style={{ maxWidth: '400px', width: "inherit", height: '230px !important' , transform: "translate(0%, -90%)", margin: "auto" }}
                            >
                            <div className="Container">
                             <div className="row">
                                 <div className="col-6 mx-auto my-auto">
                                     
                                 
                            <img
                                alt=""
                                src={imagestate}
                                id="document"
                                style={{ maxWidth: '250px', height: 'inherit',margin:"auto",position:"absolute",top: -"50px" }}
                                />
                                </div>
                                </div>   
                            </div>
                            <div className="d-none d-lg-block" id="picCont" >
                                <i className="fas fa-file-upload picCont" style={{ textAlign: 'center', color: '#c4c4c4', fontSize: '90px', marginLeft: '160px', marginTop: '-23px', marginBottom: '10px' }} />
                                <p className="text-center picCont" style={{ textAlign: 'center', color: '#8f8f8f' }}>Drag or drop here</p>
                                <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f' }}>Or</p>
                                <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f' }}>Browse files</p>
                            </div>
                                </div>
                            <div className="d-flex flex-nowrap justify-content-between">
                            <label htmlFor="message-text" style={{ fontSize: '14px', color: '#c4c4c4' }}>Accepted file types : .jpeg, .jpg, .png</label>
                            <span><i className="fas fa-lock" style={{ color: '#c4c4c4' }}> </i> Secure </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-text" >Description</label>
                            <input type="text" className="form-control" id="description" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                    </div>
                    


                
                <Modal.Footer>
                    <Button
                        onClick={handleShow}
                        className="btn btn-secondary">
                        Cancel
                    </Button>
                    <input 
                    type="submit"
                    onClick={sidebarActions}
                        className="btn btn-primary" data-dismiss="modal" value  ="Upload" style={{ background: '#F8C800', border: '#F8C800', color: '#fff' }}/>
                    
                   
                </Modal.Footer>
                </form>
                </Modal.Body>
            </Modal>
            
        </>
    )
}
const MapStateToProps = state => {
    return {
        sidebarValues: state.userReducer.Uploads[0]
    }
}
const MapDispatchToProps = dispatch => {
    return {
        sidebarActions: (files) => dispatch(Uploads(files))
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Modals) 