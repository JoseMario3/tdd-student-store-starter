import * as React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  let subTotal = 0;

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
          {props.shoppingCart.length == 0 ? (
            <div className="notification">
              No items added to cart yet. Start shopping now!
            </div>
          ) : (
            <div className="CartTable">
              <div className="header">
                <div className="header-row">
                  <span className="flex-2">Name</span>
                  <span className="center">Quantity</span>
                  <span className="center">Unit Price</span>
                  <span className="center">Cost</span>
                </div>
                {props.shoppingCart.map((item, idx) => {
                  let price = props.products[item.itemId - 1]?.price;
                  let name = props.products[item.itemId - 1]?.name;
                  let quantity = item.quantity;
                  subTotal += price * quantity;
                  return quantity <= 0 ? null : (
                    <div className="product-row" key={idx}>
                      <span className="flex-2 cart-product-name" key={idx}>
                        {name}
                      </span>
                      <span className="center cart-product-quantity">
                        {quantity}
                      </span>
                      <span className="center cart-product-price">
                        ${price.toFixed(2)}
                      </span>
                      <span className="center cart-product-subtotal">
                        ${(price * quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="receipt">
                <div className="receipt-subtotal">
                  <span className="label">Subtotal</span>
                  <span></span>
                  <span></span>
                  <span className="center subtotal">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
                <div className="receipt-taxes">
                  <span className="label">Taxes and Fees</span>
                  <span></span>
                  <span></span>
                  <span className="center">
                    ${(subTotal * 0.0875).toFixed(2)}{" "}
                  </span>
                </div>
                <div className="receipt-total">
                  <span className="label">Total</span>
                  <span></span>
                  <span></span>
                  <span className="center total-price">
                    ${(subTotal + subTotal * 0.0875).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <CheckoutForm
            isOpen={props.isOpen}
            shoppingCart={props.shoppingCart}
            products={props.products}
            checkoutForm={props.CheckoutForm}
            handleOnSubmit={props.handleOnSubmit}
            handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
            success={props.success}
            sent={props.sent}
            shoppingExists={props.shoppingExists}
            receipt={props.receipt}
            setSuccess={props.setSuccess}
            handleOnToggle={props.handleOnToggle}
          />
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
