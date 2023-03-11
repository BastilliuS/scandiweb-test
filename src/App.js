import "./App.css";
import { useEffect,useState } from "react";
import MassDeleteButton from "./Components/Buttons/MassDeleteButton";
import Products from "./Components/Products/Products";
import { Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost/db.php')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.log(error));
  // }, []);

  // console.log(products)
  

  let products = [
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
          {products.map((product) => {
            return (
              <Products
                key={products.id}
                name={products.name}
                price={products.price}
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
      <Route path="/add-product" element={<FormPage />} />
    </Routes>
  );
}

export default App;
