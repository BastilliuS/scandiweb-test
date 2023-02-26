import React from "react";
import { Link } from "react-router-dom";
import "./FormPage.css";
import TypeSwitcher from "./TypeSwitcher/TypeSwitcher";
function FormPage() {
  return (
    <div className="page-container">
      <div className="header-container">
        <div id="product-list">Product Add</div>
        <div className="buttons">
          <button>
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
              <input type="text"></input>
            </div>
            <div className="name-container">
              <label>Name</label>
              <input type="text"></input>
            </div>
            <div className="price-container">
              <label>Price ($)</label>
              <input type="text"></input>
            </div>
          </div>
          
            
            <TypeSwitcher/>
            
          
          
        </div>
      
      <div className="footer-container">Scandiweb Test Assignment</div>
    </div>
  );
}

export default FormPage;
