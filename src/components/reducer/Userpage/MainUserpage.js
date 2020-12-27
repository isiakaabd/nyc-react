import React, { useEffect } from 'react'
import Button from './Button'
import Userpage from './Userpage'
import { useSelector, useDispatch } from 'react-redux'

import { stateModal } from '../action'
import UploadDoc from './modal/UploadDoc';



function MainUserpage() {
    const state = useSelector(state => state.userReducer.modal)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(stateModal)
    }, [dispatch])

    return (

        <div className=" container-fluid d-flex w-100 mb-5 p-0">

            <div className="col-lg-12" >

                <div className="row" >
                    <Button />


                    <div className="col-5-md col-lg-6 ml-0 registration-form  mt-3" id="registration-form">

                        {state ? < Userpage /> : <UploadDoc />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainUserpage