import React from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDom from "react-dom"





Modal.setAppElement("#root")
export default function Modals({ show, handleShow }) {


    return (

        <>

            <Modal isOpen={show}

                shouldCloseOnOverlayClick={false}
                style={{

                    content: {
                        position: 'absolute',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'visible',
                        boxSizing: "border-box",
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '0',
                        top: "0",
                        left: "50%",
                        transform: "translate(-50%, 0%)",

                    },
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    }
                }}

            >








                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#8f8f8f' }}>Upload Document</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span
                                aria-hidden="true"
                                onClick={handleShow}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" style={{ color: '#8f8f8f' }}>Title</label>
                                <input type="text" className="form-control" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
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

                                    >
                                        <input
                                            type="file"
                                            style={{ height: '250px', cursor: 'pointer' }}
                                            className="custom-file-input"
                                            name="filename"
                                            accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex flex-column "
                                style={{ maxWidth: '600px', height: '230px', position: "absolute", transform: "translate(20%, -90%)" }}
                            >
                                <img
                                    src
                                    style={{ width: '430px', height: '220px', marginLeft: '15px', marginTop: '-35px', display: 'none' }}
                                />
                                <div>
                                    <i className="fas fa-file-upload " style={{ textAlign: 'center', color: '#c4c4c4', fontSize: '90px', marginLeft: '190px', marginTop: '-23px', marginBottom: '10px' }} />
                                    <p className="text-center" style={{ textAlign: 'center', color: '#8f8f8f', transform: "translate(40%, -30%)" }}>Drag or drop here</p>
                                    <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', transform: "translate(40%, -30%)" }}>Or</p>
                                    <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', transform: "translate(40%, -30%)" }}>Browse files</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <label htmlFor="message-text" style={{ fontSize: '14px', color: '#c4c4c4' }}>Accepted file types : .jpeg, .jpg, .png</label>
                                <span><i className="fas fa-lock" style={{ color: '#c4c4c4' }}> </i> Secure </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" >Description</label>
                                <input type="text" className="form-control" id="description" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleShow}>Cancel</button>
                        <button type="button" onclick="uploadedDocs()" className="btn btn-primary" data-dismiss="modal" style={{ background: '#F8C800', border: '#F8C800', color: '#fff' }}>Upload</button>
                    </div>
                </div>



            </Modal >
        </>

    )



}
