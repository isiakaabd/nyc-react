import React from 'react'
function SelectInputValue(props) {

    const { name, value, id } = props
    return (

        <div className="form-group col-md-6 ">

            <select
                name={name}
                value={value}
                id={id}
                className="form-control custom-select-md  mb-3"
                value={value}>

                <option value={value} selected>{value}</option>


            </select>
        </div>

    )
}

export default SelectInputValue