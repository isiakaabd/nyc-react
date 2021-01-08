import React from 'react'
function SelectInputValue(props) {

    const { name, value, id, onChange } = props
    return (

        <div className="form-group col-12 col-md-6 col-lg-6">

            <select
                name={name}
                id={id}
                className="form-control custom-select-md  mb-3"
                value={value}
                onChange={onChange}
            >


                <option value={value} selected>{value}</option>


            </select>
        </div>

    )
}

export default SelectInputValue