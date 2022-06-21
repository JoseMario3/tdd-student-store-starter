import * as React from "react";
import "./SubNavBar.css";

export default function SubNavBar(props) {
  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              value={props.search}
              className="search-input"
              onChange={props.handleOnSubmit}
              placeholder="Search"
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>
              Help
            </span>
            <div className="cart">
              <a href="">
                My Cart
                <i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu">
            {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map(
              (i) => {
                return (
                  <li key={i} className={(props.active == i) ? "is-active" : ""}>
                    <button
                      className={i}
                      onClick={() => {
                        props.setCategory(i);
                        props.setActive(i);
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
      </div>
    </nav>
  );
}
