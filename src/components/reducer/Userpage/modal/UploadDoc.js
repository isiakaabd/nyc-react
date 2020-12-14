import React from 'react';
import Modal from 'react-modal';

export default function UploadDoc() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    return (
        <>

            < div className="col-10 col-md-9 col-lg-10 py-4   mx-auto">
                <h4 className="text-left text-nowrap mx-auto" >Uploaded Documents</h4>
                <div className="d-flex flex-wrap col-12 col-md-10 col-lg-10" style={{ alignItems: 'center', background: '#686868', boxShadow: '0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(55.63px)', borderRadius: '10px' }}>

                    <div className=" col-md-3 my-2  col-lg-3  py-3" >
                        <img src="images/WomanFace2.png" className="d-flex " style={{ height: " 173px", width: "161px" }} />
                    </div>
                    <li name="string" id="string" style={{ display: 'none' }} />
                    <div className="col-9  mt-2 col-md-6 col-lg-8  mx-auto">
                        <p style={{ color: 'white' }}>A <abbr title="Corporate Affairs Commission">CAC</abbr> Certificate and a maximum of 5 pictures is needed to verify your business.</p>
                    </div>

                </div>


                {/* Button trigger modal */}
                <div className=" d-flex flex-wrap " style={{ gap: "20px" }}>

                    <button
                        isOpen={modalIsOpen}
                        onClick={openModal}
                        className="py-3"
                        style={{ width: '180px', marginTop: "30px", height: '53px', border: 'none', color: 'white', borderRadius: '10px', backgroundColor: '#F8C810 !important', boxShadow: '#686868', padding: '1px !important', fontWeight: 'bolder' }} type="button" S className="btn btn-warning"
                        dataToggle="modal"
                        data-target="#staticBackdrop">
                        Upload Document
                             </button>
                    <button className="py-3"
                        style={{ width: '180px', marginTop: "30px", height: '53px', color: 'white', border: 'none', borderRadius: '10px', backgroundColor: '#F8C810 !important', padding: '1px !important', boxShadow: '#686868', fontWeight: 'bolder' }} type="button" className="btn btn-warning">
                        View Document
                          </button>
                </div>
            </ div>
            <Modal
                isOpen={modalIsOpen}
            >
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ marginLeft: '140px' }}>
                    <div className="modal-dialog modal-dialog-centered">
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
                                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#8f8f8f' }}>Title</label>
                                        <input type="text" className="form-control" id="title" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#8f8f8f' }}>Attach Document</label>
                                        <div style={{ height: '230px', borderRadius: '5px', border: '3px dashed #c4c4c4' }} className="custom-file">
                                            <div className="custom-file" id="change">
                                                <input id="uploadDoc" type="file" onchange="imageLoader(event)" style={{ height: '250px', width: '600px', cursor: 'pointer' }} className="custom-file-input" name="filename" accept="image/gif, image/jpeg, image/png , .pdf , .jpeg,.png" />
                                            </div>
                                            <div style={{ width: '600px', height: '230px' }}>
                                                <img src id="document" style={{ width: '430px', height: '220px', marginLeft: '15px', marginTop: '-35px', display: 'none' }} />
                                                <div id="picCont">
                                                    <i className="fas fa-file-upload picCont" style={{ textAlign: 'center', color: '#c4c4c4', fontSize: '90px', marginLeft: '190px', marginTop: '-23px', marginBottom: '10px' }} />
                                                    <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', marginLeft: '-140px' }}>Drag or drop here</p>
                                                    <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', marginLeft: '-140px' }}>Or</p>
                                                    <p className="picCont" style={{ textAlign: 'center', color: '#8f8f8f', marginLeft: '-140px' }}>Browse files</p>
                                                </div>
                                            </div>
                                        </div>
                                        <label htmlFor="message-text" className="col-form-label" style={{ fontSize: '14px', color: '#c4c4c4' }}>Accepted file types : .jpeg, .jpg, .png &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i className="fas fa-lock" style={{ color: '#c4c4c4' }}> </i> Secure </span></label>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Description</label>
                                            <input type="text" className="form-control" id="description" style={{ color: '#8f8f8f', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" onclick="uploadedDocs()" className="btn btn-primary" data-dismiss="modal" style={{ background: '#F8C800', border: '#F8C800', color: '#fff' }}>Upload</button>
                                    </div>
                                </form></div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
