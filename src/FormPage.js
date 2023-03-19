import React from "react";
import { Link } from "react-router-dom";
import "./FormPage.css";

import { useState } from "react";
import "./TypeSwitcher/TypeSwitcher.css";

function FormPage(props) {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Make a selection");
  const [bookWeight, setBookWeight] = useState("");
  const [dvdSize, setDvdSize] = useState("");
  const [furnitureHeight, setFurnitureHeight] = useState("");
  const [furnitureWidth, setFurnitureWidth] = useState("");
  const [furnitureLength, setFurnitureLength] = useState("");

  const handleSave = () => {
    const productData = {
      sku: sku,
      name: name,
      price: price,
      type: type,
      book_weight: type === "Book" ? bookWeight : null,
      dvd_size: type === "DVD" ? dvdSize : null,
      furniture_dimensions:
        type === "Furniture"
          ? `${furnitureHeight}x${furnitureWidth}x${furnitureLength}`
          : null,
    };
    console.log(productData);

    fetch("http://localhost/add_product.php", {
      method: "POST",

      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
      
      props.updateProducts();
  };

  const [selectedOption, setSelectedOption] = useState("TypeSwitcher");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setType(event.target.value);
  };

  return (
    <div className="page-container">
      <div className="header-container">
        <div id="product-list">Product Add</div>
        <div className="buttons">
          <button onClick={handleSave}>
            <Link className="link" to={"/"}>
              SAVE
            </Link>
          </button>
          <button>
            <Link className="link" to={"/"}>
              CANCEL
            </Link>
          </button>
        </div>
      </div>

      <div id="product_form">
        <div className="form-fields">
          <div className="SKU-container">
            <label>SKU</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            ></input>
          </div>
          <div className="name-container">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="price-container">
            <label>Price ($)</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="type-switcher-container">
          <div className="type-dropdown">
            <label id="label1">Type Switcher</label>
            <select
              className="type-switcher"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="Make a selection" id="Make a selection">Select</option>
              <option value="DVD" id="DVD">
                DVD
              </option>
              <option value="Furniture" id="Furniture">
                Furniture
              </option>
              <option value="Book" id="Book">
                Book
              </option>
            </select>
          </div>
          <div className="type-holder">
            {selectedOption === "DVD" && (
              <div>
                <label>Size(MB)</label>
                <input
                  type="text"
                  id="size"
                  value={dvdSize}
                  onChange={(e) => setDvdSize(e.target.value)}
                ></input>
              </div>
            )}
            {selectedOption === "Furniture" && (
              <div>
                <div>
                  <label>Height (CM)</label>
                  <input
                    type="text"
                    id="height"
                    value={furnitureHeight}
                    onChange={(e) => setFurnitureHeight(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label>Width (CM)</label>
                  <input
                    type="text"
                    id="width"
                    value={furnitureWidth}
                    onChange={(e) => setFurnitureWidth(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label>Length (CM)</label>
                  <input
                    type="text"
                    id="length"
                    value={furnitureLength}
                    onChange={(e) => setFurnitureLength(e.target.value)}
                  ></input>
                </div>
              </div>
            )}
            {selectedOption === "Book" && (
              <div>
                <label>Weight(KG)</label>
                <input
                  type="text"
                  id="weight"
                  value={bookWeight}
                  onChange={(e) => setBookWeight(e.target.value)}
                ></input>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer-container">Scandiweb Test Assignment</div>
    </div>
  );
}

export default FormPage;
