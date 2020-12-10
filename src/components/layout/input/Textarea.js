import React from 'react'
import classnames from "classnames"
import PropTypes from "prop-types"


function Textarea(props) {

    const { name, type, value, label, onChange, error } = props
    return (
        <>


            {/* <div className="form-group"> */}


            <div style={{ border: "1px solid grey", }} className=" card mb-4  bg-aqua">
                <label className="ml-3" htmlFor={label}> <strong>{label}</strong>:</label>
                <textarea type={type}


                    className={classnames("form-control-lg", { "is-invalid": error })}
                    name={name}

                    style={styles}
                    value={value}

                    onChange={onChange}
                />
                {error && < div className=" invalid-feedback text-capitalize ml-3">{error}</div>}
            </div>

        </>

    )
}
const styles = {
    width: "100%",
    border: "none",
    outline: "red",
    focus: "none",
    fontSize: "18px"
}

Textarea.prototype = {
    texarea: PropTypes.string
}
export default Textarea