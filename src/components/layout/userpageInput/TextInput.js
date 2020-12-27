import React from "react"




function TextInput(props) {
    const { name, placeholder, value, id } = props
    return (

        <div className="form-group col-10 col-md-6 col-lg-10">

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