import React from "react"




function Textarea(props) {
    const { name, placeholder, value, id } = props
    return (

        <div className="form-group col-10 col-md-6 col-lg-10 ">

            <textarea
                placeholder={placeholder}
                className="form-control"
                id={id}
                name={name}
                value={value}

            />

        </div>

    )
}
export default Textarea