import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
        <div className="intro">
          <h1 className="welcome">Welcome!</h1>
          <h1 className="merch">Find Your Merch!</h1>
          <p className="words">We have all kinds of goodies. Click on
            any of the items to start filling up your 
            shopping cart. Checkout whenever you're ready.
          </p>
        </div>
        <div className="media">
            <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
              alt="hero"
              className="hero-image"
            />
      </div>
    </div>
  );
}
