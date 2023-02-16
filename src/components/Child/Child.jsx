import React from 'react'
import Balloon from '../Balloon/Balloon'

function Child(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <Balloon color={props.color} />
        </div>
    )
}

export default Child