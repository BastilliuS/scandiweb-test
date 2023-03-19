import "./App.css";
import { useEffect, useState } from "react";
import MassDeleteButton from "./Components/Buttons/MassDeleteButton";
import Products from "./Components/Products/Products";
import { Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";

function App() {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    fetch("http://localhost/db.php")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  
  function updateProducts(){
    fetch("http://localhost/db.php")
    .then((response) => response.json())
  .then((data) => setProducts(data))
  }
  
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
            <MassDeleteButton />
          </div>
        </div>
        <div className="products-container">
          {products.map((product) => {
            return (
              <Products
              key={product.ID}
                sku={product.SKU}
                name={product.Name}
                price={product.Price}
                type={product.TYPE}
                weight={product.BOOK_WEIGHT}
                size={product.DVD_SIZE}
                dimensions={product.FURNITURE_DIMENSIONS}
              />
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
      <Route path="/add-product" element={<FormPage updateProducts={updateProducts} />} />
    </Routes>
  );
}

export default App;
