
import React from 'react'

function Balloon(props) {
    return (
        <div style={{
            backgroundColor: props.color,
            border: "transparent",
            borderRadius: "50%",
            width: "50px",
            height: "50px"
        }}></div>
    )
}

export default Balloon