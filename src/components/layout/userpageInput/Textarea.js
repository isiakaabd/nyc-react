import React from "react"




function Textarea(props) {
    const { name, placeholder, value, id } = props
    return (

        <div className="form-group col-12 col-md-8 col-lg-12">

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