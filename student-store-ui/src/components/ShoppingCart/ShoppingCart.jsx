import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  if (props.isOpen) {
    return (
      <div className="shopping-cart">
        <div className="open">
          <h3>
            Shopping Cart
            <span className="cart-icon icon button add">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>
          <div className="notification">
            {" "}
            No items added to cart yet. Start shopping now!
          </div>
          <div className="checkout-form">
            <h3>
              Payment Info
              <span className="cart-icon icon button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
            </h3>
            <div className="input-field">
              <label className="label">Name</label>
              <div className="control ">
                <input
                  className="checkout-form-input"
                  type="text"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="input-field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="checkout-form-input"
                  type="email"
                  placeholder="student@codepath.org"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input className="termsAndConditions" type="checkbox" />
                  <span className="label">
                    I agree to the
                    <a href="#terms-and-conditions">terms and conditions</a>
                  </span>
                </label>
              </div>
            </div>
            <p className="is-danger">
              User info must include an email and name.
            </p>
            <div className="field">
              <div className="control">
                <button className="button checkout-button">Checkout</button>
              </div>
            </div>
          </div>
          <div className="checkout-success">
            <h3>
              Checkout Info
              <span className="icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </h3>
            <div className="content">
              <p>
                A confirmation email will be sent to you so that you can confirm
                this order. Once you have confirmed the order, it will be
                delivered to your dorm room.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shopping-cart">
        <div className="closed">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
