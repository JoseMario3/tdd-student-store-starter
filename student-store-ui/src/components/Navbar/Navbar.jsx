import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <div className="socials">
          <img
            className="twitter-icon"
            src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
            alt="twitter icon"
          ></img>
          <img
            className="instagram-icon"
            src="https://www.pinpng.com/pngs/m/90-903738_instagram-icon-white-circle-hd-png-download.png"
            alt="instagram icon"
          ></img>
          <img
            className="facebook-icon"
            src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
            alt="facebook icon"
          ></img>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#aboutUs">About Us</a>
          </li>
          <li>
            <a href="/#contactUs">Contact Us</a>
          </li>
          <li>
            <a href="/#Buy">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
