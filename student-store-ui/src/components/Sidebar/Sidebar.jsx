import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <section className={props.isOpen ? "sidebar open" : "sidebar closed"}>
      <div className="wrapper">
        <button
          className={
            props.isOpen ? "toggle-button open" : "toggle-button button"
          }
          onClick={props.handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <ShoppingCart
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          products={props.products}
          checkoutForm={props.CheckoutForm}
          handleOnSubmit={props.handleOnSubmitCheckoutForm}
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          success={props.success}
          sent={props.sent}
          shoppingExists={props.shoppingExists}
          receipt={props.receipt}
          setSuccess={props.setSuccess}
          handleOnToggle={props.handleOnToggle}
        />
      </div>
    </section>
  );
}
