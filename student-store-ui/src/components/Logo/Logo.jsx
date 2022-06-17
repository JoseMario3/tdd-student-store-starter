import * as React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Logo.css";

export default function Logo(props) {
  return (
    <div className="logo">
      <Link to="/">
      <img
        src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
        className="image"
        alt="logo"
      ></img>
      </Link>
    </div>
  );
}
