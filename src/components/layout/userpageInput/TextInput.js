import React from "react"




function TextInput(props) {
    const { name, placeholder, value, id } = props
    return (

        <div className="form-group col-md-6">

            <input type={name}

                placeholder={placeholder}
                className="form-control"
                id={id}
                name={name}
                value={value}

            />

        </div>

    )
}
export default TextInput