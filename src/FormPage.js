import React from "react";
import { Link } from "react-router-dom";

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
      <div className="products-container"></div>
      <div className="footer-container">Scandiweb Test Assignment</div>
    </div>
  );
}

export default FormPage;
