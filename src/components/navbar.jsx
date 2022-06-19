import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand mb-0 h1">
            Wallet
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link" to="/transactions/new">
                New Transaction
              </Link>
            </ul>
            <ul className="navbar-nav">
              <Link className="nav-item nav-link mx-3" to="/login">
                Login
              </Link>
              <Link className="btn btn-dark" to="/signup">
                Signup
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
