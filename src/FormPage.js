import React from "react";
import { Link } from "react-router-dom";
import "./FormPage.css";

import { useState } from "react";
import "./TypeSwitcher/TypeSwitcher.css";

function FormPage(props) {
  const [formValues, setFormValues] = useState({
    sku: "",
    name: "",
    price: "",
    weight: "",
    size: "",
    height: "",
    width: "",
    length: "",
  });

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Make a selection");
  const [bookWeight, setBookWeight] = useState("");
  const [dvdSize, setDvdSize] = useState("");
  const [furnitureHeight, setFurnitureHeight] = useState("");
  const [furnitureWidth, setFurnitureWidth] = useState("");
  const [furnitureLength, setFurnitureLength] = useState("");

  const validateForm = () => {
    if (
      !formValues.sku ||
      !formValues.name ||
      !formValues.price ||
      ((!formValues.height || !formValues.length || !formValues.width) &&
        !formValues.weight &&
        !formValues.size)
    ) {
      return false;
    } else return true;
  };
  const [isFormValid, setIsFormValid] = useState();
  const [errors, setErrors] = useState([]);
  function handleBlur(event) {
    const { name, value } = event.target;
    if (name === "price" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "Please provide a numeric value",
      }));
    } else if (name === "price" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        price: "",
      }));
    }
    if (name === "weight" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        weight: "Please provide a numeric value",
      }));
    } else if (name === "weight" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        weight: "",
      }));
    }
    if (name === "height" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        height: "Please provide a numeric value",
      }));
    } else if (name === "height" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        height: "",
      }));
    }
    if (name === "width" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        width: "Please provide a numeric value",
      }));
    } else if (name === "width" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        width: "",
      }));
    }
    if (name === "length" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        length: "Please provide a numeric value",
      }));
    } else if (name === "length" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        length: "",
      }));
    }
    if (name === "name" && !isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please provide a text value",
      }));
    } else if (name === "name" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    } else if (name === "name" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
    if (name === "sku" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sku: "Please provide a numeric value",
      }));
    } else if (name === "sku" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sku: "",
      }));
    }
    if (name === "size" && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        size: "Please provide a numeric value",
      }));
    } else if (name === "size" && value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        size: "",
      }));
    }
    console.log(errors);
  }

  const handleSave = () => {
    const isValid = validateForm();
    setIsFormValid(isValid);
    if (isValid) {
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

      fetch("/php/add_product.php", {
        method: "POST",

        body: JSON.stringify(productData),
      })
        .then((response) => {
          if (response.status === 500) {
            alert("SKU already exists, please choose another SKU.");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      props.updateProducts();
    } else {
      alert("Please enter required information");
    }
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
            {isFormValid ? (
              <Link className="link" to={"/"}>
                SAVE
              </Link>
            ) : (
              <span>SAVE</span>
            )}
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
          <div className="sku_and_error">
            <div className="SKU-container">
              <label>SKU</label>
              <input
                name="sku"
                id="sku"
                type="text"
                value={sku}
                onChange={(e) => {
                  setSku(e.target.value);
                  setFormValues({ ...formValues, sku: e.target.value });
                }}
                required
                onBlur={handleBlur}
              ></input>
            </div>
            {errors.sku && <div>{errors.sku}</div>}
          </div>
          <div className="name_and_error">
            <div className="name-container">
              <label>Name</label>
              <input
                name="name"
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setFormValues({ ...formValues, name: e.target.value });
                }}
                required
                onBlur={handleBlur}
              ></input>
            </div>
            {errors.name && <div>{errors.name}</div>}
          </div>
          <div className="price_and_error">
            <div className="price-container">
              <label>Price ($)</label>
              <input
                name="price"
                id="price"
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  setFormValues({ ...formValues, price: e.target.value });
                }}
                required
                onBlur={handleBlur}
              ></input>
            </div>
            {errors.price && <div>{errors.price}</div>}
          </div>
        </div>

        <div className="type-switcher-container">
          <div className="type-dropdown">
            <label id="label1">Type Switcher</label>
            <select
              id="productType"
              className="type-switcher"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="Make a selection" id="Make a selection">
                Select
              </option>
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
              <div className="size_and_error">
                <div>
                  <label>Size(MB)</label>
                  <input
                    name="size"
                    type="text"
                    id="size"
                    value={dvdSize}
                    onChange={(e) => {
                      setDvdSize(e.target.value);
                      setFormValues({ ...formValues, size: e.target.value });
                    }}
                    required
                    onBlur={handleBlur}
                  ></input>
                  <div>Please input DVD size in MB.</div>
                </div>
                {errors.size && <div>{errors.size}</div>}
              </div>
            )}
            {selectedOption === "Furniture" && (
              <div>
                <div className="height_and_error">
                  <div>
                    <label>Height (CM)</label>
                    <input
                      name="height"
                      type="text"
                      id="height"
                      value={furnitureHeight}
                      onChange={(e) => {
                        setFurnitureHeight(e.target.value);
                        setFormValues({
                          ...formValues,
                          height: e.target.value,
                        });
                      }}
                      required
                      onBlur={handleBlur}
                    ></input>
                  </div>
                  {errors.height && <div>{errors.height}</div>}
                </div>
                <div className="width_and_error">
                  <div>
                    <label>Width (CM)</label>
                    <input
                      name="width"
                      type="text"
                      id="width"
                      value={furnitureWidth}
                      onChange={(e) => {
                        setFurnitureWidth(e.target.value);
                        setFormValues({ ...formValues, width: e.target.value });
                      }}
                      required
                      onBlur={handleBlur}
                    ></input>
                  </div>
                  {errors.width && <div>{errors.width}</div>}
                </div>
                <div className="length_and_error">
                  <div>
                    <label>Length (CM)</label>
                    <input
                      name="length"
                      type="text"
                      id="length"
                      value={furnitureLength}
                      onChange={(e) => {
                        setFurnitureLength(e.target.value);
                        setFormValues({
                          ...formValues,
                          length: e.target.value,
                        });
                      }}
                      required
                      onBlur={handleBlur}
                    ></input>
                  </div>
                  {errors.length && <div>{errors.length}</div>}
                </div>
                <div>
                  Please input furniture dimensions in CM, and in HxWxL format.
                </div>
              </div>
            )}
            {selectedOption === "Book" && (
              <div className="weight_and_error">
                <div>
                  <label>Weight(KG)</label>
                  <input
                    name="weight"
                    type="text"
                    id="weight"
                    value={bookWeight}
                    onChange={(e) => {
                      setBookWeight(e.target.value);
                      setFormValues({ ...formValues, weight: e.target.value });
                    }}
                    required
                    onBlur={handleBlur}
                  ></input>
                  <div>Please input BOOK weight in KG.</div>
                </div>
                {errors.weight && <div>{errors.weight}</div>}
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
