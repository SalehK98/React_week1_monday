import React from 'react'

function Card(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#533E42",
            width: "300px",
            height: "400px",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <img src={props.imgSource} style={{ width: "200px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>{props.title}</h1>
                <span>{props.description}</span>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <a href={props.link1} target="_blank" style={{
                        padding: "10px", textDecoration: "none", color: "#800020"
                    }}>{props.text1}</a>
                    <a href={props.link2
                    } target="_blank" style={{ textDecoration: "none", color: "skyBlue" }}>{props.text2}</a>
                </div>
            </div>
        </div>
    )
}

export default Card

