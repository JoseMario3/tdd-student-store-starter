import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm(props) {
  console.log(props.receipt);
  return (
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
            name="name"
            placeholder="Student Name"
            value={props.checkoutForm}
            onChange={props.handleOnCheckoutFormChange}
          />
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            value={props.CheckoutForm}
            onChange={props.handleOnCheckoutFormChange}
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
      {props.shoppingExists ? null : (
        <p className="error">No cart or items in cart found to checkout.</p>
      )}
      {props.sent ? null : (
        <p className="error">User info must include an email and name.</p>
      )}
      <div className="field">
        <div className="control">
          <button
            className="button checkout-button"
            onClick={props.handleOnSubmit}
          >
            Checkout
          </button>
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
          {props.success ? (
            <div className="card">
              <header className="card-head">
                <h4 className="card-title">Receipt</h4>
              </header>
              {
                <section className="card-body">
                  <p className="header">
                    Showing receipt for{" "}
                    {props.receipt[props.receipt.length - 1].name} available at{" "}
                    {props.receipt[props.receipt.length - 1].email}
                  </p>
                  <ul className="purchase">
                    {props.receipt[props.receipt.length - 1].order.map(
                      (product, idx) => {
                        return (
                          <li key={idx}>
                            {product.quantity} total{" "}
                            {props.products[product.itemId - 1].name} purchased
                            at a cost of $
                            {props.products[product.itemId - 1].price} for a
                            total cost of $
                            {(
                              product.quantity *
                              props.products[product.itemId - 1].price
                            ).toFixed(2)}
                          </li>
                        );
                      }
                    )}
                    <li>
                      Before taxes, the subtotal was{" "}
                      {(
                        props.receipt[props.receipt.length - 1].total * 0.0875
                      ).toFixed(2)}
                    </li>
                    <li>
                      After taxes and fees were applied, the total comes out to{" "}
                      {props.receipt[props.receipt.length - 1].total}
                    </li>
                  </ul>
                </section>
              }
              <footer className="card-foot">
                <button
                  className="button is-success"
                  onClick={() => {
                    props.setSuccess(false);
                  }}
                >
                  Shop More
                </button>
                <button
                  className="button"
                  onClick={() => {
                    props.setSuccess(false);
                  }}
                >
                  Exit
                </button>
              </footer>
            </div>
          ) : (
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
