import React from 'react';
import Select from 'react-select'
function SelectInputValue(props) {

    const { name, value, id, onChange,options,placeholder } = props
    return (

        <div className="form-group col-12 col-md-6 col-lg-6">

            <Select
                 name={name}
                id={id}
                // className="form-control "
                className="react-select"
                value={value}
                onChange={onChange}
                options= {options}
                isSearchable
               placeholder={placeholder}
            />
        </div>

    )
}

export default SelectInputValue