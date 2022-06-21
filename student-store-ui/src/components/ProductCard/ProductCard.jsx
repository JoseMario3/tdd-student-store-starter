import * as React from "react";
import "./ProductCard.css";
import {Link} from "react-router-dom"

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + props.productId}>
          <img className="product-image" src={props.image} alt="product cover"/>
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
        <p className="product-name">{props.name}</p>
        <p className="product-price">${props.price}</p>
        </div>
        <div className="desc">
          <p className="project-description">{props.desc}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <button className="add">
              <i className="material-icons">add</i>
            </button>
            <button className="remove">
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
