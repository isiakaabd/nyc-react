import React from "react"




function TextInput(props) {
    const { name, placeholder, value, id, onChange,disabled } = props
    return (

        <div className="form-group col-12 col-md-6 col-lg-6">

            <input type={name}

                placeholder={placeholder}
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}

            />

        </div>

    )
}
export default TextInput