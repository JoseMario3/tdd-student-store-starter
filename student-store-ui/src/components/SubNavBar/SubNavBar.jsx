import * as React from "react";
import "./SubNavBar.css"

export default function SubNavBar(props) {
    return (
        <nav className="search-area">
            <div className="row">
                <div className="search-bar">
                <input type="text" value={props.search} className="search-input" onChange={props.handleOnSubmit} placeholder="search for items" />
                </div>
            </div>
            
            <div className="row">
                <ul className="category-menu">
                    {["All Categories", "clothing", "food", "accessories", "tech"].map((i) => {
                        return(
                        <li key={i}>
                        <button className={i} onClick={() => {props.setCategory(i)}}>{i}</button>
                        </li>
                    )})
                    }
                </ul>
            </div>
        </nav>
    )
}