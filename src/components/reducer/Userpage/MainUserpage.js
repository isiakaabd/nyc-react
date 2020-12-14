import React, { useEffect } from 'react'
import Button from './Button'
import Userpage from './Userpage'
import { useSelector, useDispatch } from 'react-redux'
import "../../css/userpage.css"

import { stateModal } from '../action'


function MainUserpage() {
    const state = useSelector(state => state.userReducer.modal)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(stateModal)
    }, [])

    return (

        <div className=" container-fluid d-flex w-100 m-0 p-0">

            <div className="col-lg-12" >

                <div className="row" >
                    <Button />
                    {/* <Button /> */}

                    <div className="col-5-md col-lg-6 ml-0 registration-form " id="registration-form">

                        {state ? < Userpage /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainUserpage