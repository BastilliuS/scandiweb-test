import "./App.css";

import MassDeleteButton from "./Components/Buttons/MassDeleteButton";
import Products from "./Components/Products/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";

function App() {
  let productsArray = [
    { id: 0, name: "Acme DISC", price: "$1" },
    { id: 1, name: "War and Peace", price: "$20.00" },
    { id: 2, name: "Chair", price: "$40.00" },
    { id: 3, name: "Chair", price: "$40.00" },
    { id: 4, name: "Chair", price: "$40.00" },
    { id: 5, name: "Chair", price: "$40.00" },
    { id: 6, name: "Chair", price: "$40.00" },
    { id: 7, name: "Chair", price: "$40.00" },
    { id: 8, name: "Chair", price: "$40.00" },
    { id: 10, name: "Chair", price: "$40.00" },
    { id: 11, name: "Chair", price: "$40.00" },
    { id: 12, name: "Chair", price: "$40.00" },
    { id: 13, name: "Chair", price: "$40.00" },
    { id: 14, name: "Chair", price: "$40.00" },
    { id: 15, name: "Chair", price: "$40.00" },
    { id: 16, name: "Chair", price: "$40.00" },
  ];
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
          {productsArray.map((product) => {
            return (
              <Products
                key={product.id}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
        <div className="footer-container">Scandiweb Test Assignment</div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-product" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
