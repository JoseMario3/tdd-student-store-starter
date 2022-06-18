import * as React from "react";
import "./SubNavBar.css";

export default function SubNavBar(props) {
  return (
    <nav className="search-area">
      <div className="row">
        <div className="search-bar">
          <input
            type="text"
            value={props.search}
            className="search-input"
            onChange={props.handleOnSubmit}
            placeholder="search for items"
          />
          <i className="material-icons">search</i>
        </div>
        <div className="links">
          <span className="help">
            <i className="material-icons">help</i>
          </span>
          <div className="cart">
            <a>
              My Cart
              <i className="material-icons">shopping_cart</i>
            </a>
          </div>
        </div>
      </div>

      <div className="row2">
        <ul className="category-menu">
          {["All Categories", "clothing", "food", "accessories", "tech"].map(
            (i) => {
              return (
                <li key={i}>
                  <button
                    className={i}
                    onClick={() => {
                      props.setCategory(i);
                    }}
                  >
                    {i}
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </nav>
  );
}
