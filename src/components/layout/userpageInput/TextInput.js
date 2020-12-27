import React from "react"




function TextInput(props) {
    const { name, placeholder, value, id } = props
    return (

        <div className="form-group col-12 col-md-8 col-lg-6 ">

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