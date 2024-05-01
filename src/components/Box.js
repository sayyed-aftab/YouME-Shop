import React from "react";
const Box = (props) => {
    console.log(props)
    return (

        <div className="box">
            <img src={props.imgLink} alt="" /> 
            <h3>{props.title}</h3> 
        </div>
    )
}
export default Box;