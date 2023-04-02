import React from "react";
import "./Products.css";
import { useState } from "react";

const Products = (props) => {
  const type = props.type;
  const weight = props.weight;
  const size = props.size;
  const dimensions = props.dimensions;

  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const handleProductSelection = (productId, isSelected) => {
    if (isSelected) {
      setSelectedProductIds((prevState) => [...prevState, productId]);
    } else {
      setSelectedProductIds((prevState) =>
        prevState.filter((id) => id !== productId)
      );
    }
  };

  setTimeout(() => {
    console.log(selectedProductIds);
  }, 0);

  return (
    <div className="product-container">
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={selectedProductIds.includes(props.id)}
          onChange={(e) => handleProductSelection(props.id, e.target.checked)}
        />
      </div>
      <div className="product-content">
        <div>{props.sku}</div>
        <div>{props.name}</div>
        <div>{props.price}$</div>
        {type === "DVD" && <div className="size">Size: {size} MB</div>}
        {type === "BOOK" && <div className="weight">Weight: {weight} KG</div>}
        {type === "Furniture" && (
          <div className="dimensions">Dimensions: {dimensions} cm</div>
        )}
      </div>
    </div>
  );
};

export default Products;
