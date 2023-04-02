import "./App.css";
import { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";

function App() {
  const [products, setProducts] = useState([]);

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  useEffect(() => {
    fetch("/php/db.php")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  function updateProducts() {
    fetch("/php/db.php")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

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

  const handleMassDelete = () => {
    fetch("php/delete.php", {
      method: "POST",
      body: JSON.stringify(selectedProductIds),
    }).then(() => {
      setSelectedProductIds([]);
      updateProducts();
    });
  };

  function MainPage() {
    return (
      <div className="page-container">
        <div className="header-container">
          <div id="product-list">Product List</div>
          <div className="buttons">
            <button>
              <Link className="link" to="/add-product">
                ADD
              </Link>
            </button>
            <button onClick={handleMassDelete}>MASS DELETE</button>
          </div>
        </div>
        <div className="products-container">
          {products.map((product) => {
            return (
              <div key={product.ID} className="product-container">
                <div className="checkbox-container">
                  <input
                    className="delete-checkbox"
                    type="checkbox"
                    checked={selectedProductIds.includes(product.ID)}
                    onChange={(e) =>
                      handleProductSelection(product.ID, e.target.checked)
                    }
                  />
                </div>
                <div className="product-content">
                  <div>{product.SKU}</div>
                  <div>{product.Name}</div>
                  <div>{product.Price}$</div>
                  {product.TYPE === "DVD" && (
                    <div className="size">Size: {product.DVD_SIZE} MB</div>
                  )}
                  {product.TYPE === "BOOK" && (
                    <div className="weight">
                      Weight: {product.BOOK_WEIGHT} KG
                    </div>
                  )}
                  {product.TYPE === "Furniture" && (
                    <div className="dimensions">
                      Dimensions: {product.FURNITURE_DIMENSIONS} cm
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer-container">Scandiweb Test Assignment</div>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/add-product"
        element={<FormPage updateProducts={updateProducts} />}
      />
    </Routes>
  );
}

export default App;
