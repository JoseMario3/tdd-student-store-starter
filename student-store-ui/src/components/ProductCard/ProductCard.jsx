import * as React from "react";
import "./ProductCard.css";
import {Link} from "react-router-dom"

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div>
        <Link to={"/products/" + props.productId}>
          <img className="product-image" src={props.image} alt="product cover"/>
        </Link>
      </div>
      <div className="product-info">
        <h1 className="product-name">{props.name}</h1>
        <h5 className="product-price">${props.price}</h5>
      </div>
    </div>
  );
}
