import React from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

Modal.setAppElement("#root")
export default function Modals({ show, setShow, handleShow }) {



    return (


        <Modal isOpen={show}
            // onRequestClose={() => setShow()}
            shouldCloseOnOverlayClick={false}
            style={{

                content: {
                    position: 'absolute',
                    // maxHeight: "600px",
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'hidden',
                    boxSizing: "border-box",
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '10px',
                    outline: 'none',
                    padding: '0',
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, 0%)",

                }
            }}

        >




            {/* <div className="col-6 col-md-7 col-lg-7 mx-auto"> */}


            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#8f8f8f' }}>Upload Document</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="recipient-name" style={{ color: '#8f8f8f' }}>Title</label>
                            <input type="text" className="form-control" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipient-name" style={{ color: '#8f8f8f' }}>Attach Document</label>
                            <div style={{ height: '230px', borderRadius: '5px', border: '3px dashed #c4c4c4' }} className="custom-file">
                                <div className="custom-file" id="change">
                                    <input id="uploadDoc" type="file" onchange="imageLoader(event)" style={{ height: '250px', cursor: 'pointer' }} className="custom-file-input" name="filename" accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png" />
                                </div>
                            </div>
                        </div>
                        {/* <div style={{ maxWidth: '600px', height: '230px' }}> */}
                        <div className="d-flex flex-column " style={{ maxWidth: '600px', height: '230px', position: "absolute", transform: "translate(50%, -100%)" }}>
                            <img src id="document" style={{ width: '430px', height: '220px', marginLeft: '15px', marginTop: '-35px', display: 'none' }} />
                            <div
                                id="picCont">
                                <i className="fas fa-file-upload picCont" style={{ textAlign: 'center', color: '#c4c4c4', fontSize: '90px', marginLeft: '190px', marginTop: '-23px', marginBottom: '10px' }} />
                                <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', marginLeft: '-140px' }}>Drag or drop here</p>
                                <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', marginLeft: '-140px' }}>Or</p>
                                <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', marginLeft: '-140px' }}>Browse files</p>
                            </div>
                        </div>

                        <label htmlFor="message-text" style={{ fontSize: '14px', color: '#c4c4c4' }}>Accepted file types : .jpeg, .jpg, .png &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i className="fas fa-lock" style={{ color: '#c4c4c4' }}> </i> Secure </span></label>
                        <div className="form-group">
                            <label htmlFor="message-text" >Description</label>
                            <input type="text" className="form-control" id="description" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleShow}>Cancel</button>
                            <button type="button" onclick="uploadedDocs()" className="btn btn-primary" data-dismiss="modal" style={{ background: '#F8C800', border: '#F8C800', color: '#fff' }}>Upload</button>
                        </div>



                    </form>
                </div>
            </div>

            {/* </div> */}



        </Modal >

    )



}
