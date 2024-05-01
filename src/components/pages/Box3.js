import React from "react";

const Box3= (props) => {
  console.log(props)
  return (
    <div className="box2-container">
      <div className="accessories">
        <img src={props.imgLink} alt="" /> 
        <div className="des">
          <h3>{props.title}</h3> 
          <h5>{props.subtitle}</h5> 
          <h1>{props.price}</h1>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Box3;
