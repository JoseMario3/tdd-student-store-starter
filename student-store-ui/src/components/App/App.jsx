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
  const [sidebar, setSidebar] = useState(false)

  const handleOnSubmit = (event) => {
    setSearch(event.target.value);
  };

  const handleOnToggle = (event) => {
    setSidebar(sidebar => !sidebar);
  }

  useEffect(() => {
    const getProducts = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        setProducts(response.data.products);
      } catch {
        setIsFetching(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            isOpen={true}
            shoppingCart={products}
            products={products}
            checkoutForm={null}
            handleOnCheckoutFormChange={null}
            handleOnSubmitCheckoutForm={null}
            handleOnToggle={handleOnToggle}
            sidebar={sidebar}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleadditemtocart={null}
                  handleremoveitemfromcart={null}
                  category={category}
                  setCategory={setCategory}
                  search={search}
                  handleOnSubmit={handleOnSubmit}
                  active={active}
                  setActive={setActive}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={null}
                  handleRemoveItemFromCart={null}
                />
              }
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
