import React, { Component } from "react";
import logo from "../images/logo.jpg";
import { MdViewHeadline } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="nav-btn"
              type="button"
              onClick={this.handleToggle}
            >
              <MdViewHeadline className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
