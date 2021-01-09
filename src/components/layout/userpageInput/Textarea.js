import React from "react"




function Textarea(props) {
    const { name, placeholder, value, id, onChange } = props
    return (

        <div className="form-group col-12 col-md-12 col-lg-12">

            <textarea
                placeholder={placeholder}
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}

            />

        </div>

    )
}
export default Textarea