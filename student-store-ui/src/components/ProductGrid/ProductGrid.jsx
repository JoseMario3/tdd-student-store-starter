import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  function getQuantity(id) {
    for (let i = 0; i < props.shoppingCart.length; i++) {
      if (props.shoppingCart[i].itemId == id) {
        return props.shoppingCart[i].quantity;
      }
    }
  }

  return (
    <div id="Buy" className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
          {props.products.map((product, idx) => {
            return (
              <ProductCard
                name={product.name}
                key={idx}
                productId={product.id}
                price={product.price}
                image={product.image}
                handleAddItemToCart={props.handleAddItemToCart}
                handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                showdescription={false}
                quantity={getQuantity(product.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
