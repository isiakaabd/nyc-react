import React from 'react'
import classnames from "classnames"

function TextInputList(props) {
    const { name, type, label, value, onChange, error } = props
    return (

        <div style={{ border: "1px solid grey", }} className="card mb-4 ">

            <label className="ml-3" htmlFor={label}> <strong>{label}</strong>:</label>
            <input
                type={type}
                style={{ width: "100%", border: "none", focus: "none", fontSize: "18px" }}

                className={classnames("form-control-lg", { "is-invalid": error })}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && < div className=" invalid-feedback text-capitalize ml-3">{error}</div>}



        </div>


    )
}
export default TextInputList