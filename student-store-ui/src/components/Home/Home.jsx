import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavBar from "../SubNavBar/SubNavBar";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home(props) {
  const filterCategory =
    Boolean(props.category) && props.category.toLowerCase() !== "all categories"
      ? props.products.filter(
          (cat) => cat.category === props.category.toLowerCase()
        )
      : props.products;

  const filterSearch = Boolean(props.search)
    ? filterCategory.filter(
        (prodCat) => prodCat.name.toLowerCase().indexOf(props.search) != -1
      )
    : filterCategory;

  return (
    <div className="home">
      <Hero />

      <SubNavBar
        handleOnSubmit={props.handleOnSubmit}
        filterSearch={filterSearch}
        setCategory={props.setCategory}
        search={props.search}
        active={props.active}
        setActive={props.setActive}
        hamburger={props.hamburger}
        handleHamburger={props.handleHamburger}
      />

      <ProductGrid
        products={filterSearch}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />

      <About />
      <Contact />
    </div>
  );
}
