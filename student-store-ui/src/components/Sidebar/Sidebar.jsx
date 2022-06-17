import * as React from "react"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <section className="sidebar closed">
      <button className="toggle-button button closed" onClick={props.handleOnToggle}>
        <i className="material-icons md-48">arrow_forward</i>
      </button>
    </section>
  )
}
