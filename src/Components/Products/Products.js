import React from "react";
import "./Products.css"
const Products = (props) => {
  return <div className="product-container">
    <div className="checkbox-container">
        <input type="checkbox"/>
    </div>
    <div className="product-content">
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.price}</div> 
    </div>
  </div>;
};

export default Products;
