import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavBar from "../SubNavBar/SubNavBar"

export default function Home(props) {

  const filterCategory = Boolean(props.category) && props.category.toLowerCase() !== "all categories"
  ? props.products.filter((cat) => cat.category === props.category.toLowerCase())
  : props.products;
  
  const filterSearch = Boolean(props.search) 
  ? filterCategory.filter((prodCat) => prodCat.name.toLowerCase().indexOf(props.search) != -1) : filterCategory

  return (
    <div className="home">
      <Hero />

      <SubNavBar 
        handleOnSubmit={props.handleOnSubmit}
        filterSearch={filterSearch}
        setCategory={props.setCategory}
        search={props.search}
      />

      <ProductGrid
        products={filterSearch}
        handleadditemtocart={null}
        handleremoveitemfromcart={null}
      />

      <div className="about" id="aboutUs">
        <div className="about-content">
          <h3>About</h3>
          <div className="summary">
            <div className="summary-text">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div className="summary-media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="giant Codepath logo"/>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <div className="summary">
            <ul className="summary-info">
              <li>
                <span className="label">Email:</span>
                <span>code@path.org</span>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>1-800-CodePath</span>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
            </ul>
            <div className="summary-media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="happy person"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
