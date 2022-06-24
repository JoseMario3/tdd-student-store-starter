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
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
  });
  const [shoppingCart, setShoppingCart] = useState([]);
  const [sent, setSent] = useState(true);
  const [shoppingExists, setShoppingExists] = useState(true);
  const [success, setSuccess] = useState(false);
  const [receipt, setReceipt] = useState({});

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

      const withRemoved = shoppingCart.filter((item) => {
        return item.quantity > 0;
      });

      setShoppingCart(withRemoved);
    }
  };

  const handleOnCheckoutFormChange = (event) => {
    const { name, value } = event.target;
    setCheckoutForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleOnSubmitCheckoutForm = async () => {
    if (checkoutForm.name == "" || checkoutForm.email == "") {
      setSent(false);
      return;
    } else {
      setSent(true);
    }

    if (shoppingCart.length == 0) {
      setShoppingExists(false);
      return;
    } else {
      setShoppingExists(true);
    }

    try {
      const message = await axios.post("http://localhost:3001/store/", {
        user: checkoutForm,
        shoppingCart: shoppingCart,
      });

      const response = await axios.get("http://localhost:3001/store/purchases");
      setCheckoutForm({
        name: "",
        email: "",
      });
      setShoppingCart([]);
      setReceipt(response.data.purchases);
      setSuccess(true);
      console.log("hello");
    } catch (error) {
      setError(error);
    }
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
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            success={success}
            sent={sent}
            isOpen={isOpen}
            shoppingExists={shoppingExists}
            receipt={receipt}
            setSuccess={setSuccess}
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
