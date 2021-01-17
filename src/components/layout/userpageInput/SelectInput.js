import React from 'react';
import Select from 'react-select'
function SelectInputValue(props) {

    const { name, value, id, onChange,options,placeholder,theme,inputValue ,onInputChange,defaultInputValue} = props
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
                theme={theme}
                isSearchable
                defaultInputValue={defaultInputValue}
               placeholder={placeholder}
               autoFocus
             inputValue= {inputValue}
             onInputChange={onInputChange}
             closeMenuOnSelect={true}
             
           
            />
        </div>

    )
}

export default SelectInputValue