import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="contents">
        <Logo />
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
          <li>
            <a href="#contactUs">Contact Us</a>
          </li>
          <li>
            <a href="/#Buy">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
