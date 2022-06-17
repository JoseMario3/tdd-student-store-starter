import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  return (
    <div className="content">
      <h3 className="best-selling">Best Selling Products</h3>
      <div className="product-grid">
      {props.products.map((product, idx) => {
        return (
          <ProductCard
            name={product.name}
            key={idx}
            productId={product.id}
            price={product.price}
            image={product.image}
            handleadditemtocart={props.handleadditemtocart}
            handleremoveitemfromcart={props.handleremoveitemfromcart}
            showdescription={null}
          />
        );
      })}
    </div>
    </div>
  );
}
