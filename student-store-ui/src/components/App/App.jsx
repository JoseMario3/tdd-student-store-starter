import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductDetail from "../ProductDetail/ProductDetail";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [category, setCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All Categories");
  const [isOpen, setSidebar] = useState(false);
  const [hamburger, setHamburger] = useState(true);
  const [error, setError] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleOnSubmit = (event) => {
    setSearch(event.target.value);
  };

  const handleOnToggle = (event) => {
    setSidebar((isOpen) => !isOpen);
  };

  const handleHamburger = (event) => {
    setHamburger((hamburger) => !hamburger);
  };

  const handleAddItemToCart = (event) => {
    let newObject = {
      itemId: event,
      quantity: 1,
    };

    let copy = [...shoppingCart];
    if (shoppingCart.length == 0) {
      setShoppingCart([newObject]);
    } else {
      for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].itemId == event) {
          copy[i].quantity += 1;
          setShoppingCart(copy);
          break;
        } else if (i + 1 == shoppingCart.length) {
          setShoppingCart([...shoppingCart, newObject]);
        }
      }
    }
  };

  console.log(shoppingCart);

  const handleRemoveItemFromCart = (event) => {
    if (shoppingCart.length == 0) {
      return;
    }

    let copy = [...shoppingCart];

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == event && shoppingCart[i].quantity > 0) {
        copy[i].quantity -= 1;
        setShoppingCart(copy);
      }

      if (shoppingCart[i].quantity <= 0) {
        shoppingCart.splice(i, 1);
      }
    }
  };

  const handleOnCheckoutFormChange = (event) => {
    return 0;
  };

  const handleOnSubmitCheckoutForm = (event) => {
    return 0;
  };

  useEffect(() => {
    const getProducts = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get("http://localhost:3001/store");
        setProducts(response.data.products);
      } catch (error) {
        setError(error);
        setIsFetching(false);
      }
    };
    setIsFetching(false);
    getProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={null}
            handleOnCheckoutFormChange={null}
            handleOnSubmitCheckoutForm={null}
            handleOnToggle={handleOnToggle}
            isOpen={isOpen}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  category={category}
                  setCategory={setCategory}
                  search={search}
                  handleOnSubmit={handleOnSubmit}
                  active={active}
                  setActive={setActive}
                  hamburger={hamburger}
                  handleHamburger={handleHamburger}
                  shoppingCart={shoppingCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
