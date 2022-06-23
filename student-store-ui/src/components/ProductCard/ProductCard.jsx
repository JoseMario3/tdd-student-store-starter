import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + props.productId}>
          <img
            className="product-image"
            src={props.image}
            alt="product cover"
          />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{props.name}</p>
          <p className="product-price">${props.price}</p>
        </div>
        {props.showDescription ? (
          <div className="desc">
            <p className="project-description">{props.desc}</p>
          </div>
        ) : null}
        <div className="actions">
          <div className="buttons">
            <button
              className="add"
              onClick={() => {
                props.handleAddItemToCart(props.productId);
              }}
            >
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => {
                props.handleRemoveItemFromCart(props.productId);
              }}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>
          {!props.quantity ? null : (
            <span className="product-quantity">
              <span className="amt">{props.quantity}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
