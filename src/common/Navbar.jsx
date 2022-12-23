import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-white">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontFamily: "Carviar Dreams Bold" }}
        >
          JJ Adventures
        </Link>
        <button
          className="navbar-toggler text-white bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ fontFamily: "Carviar Dreams Bold" }}
        >
          <div className="col-md-12 d-flex  justify-content-end">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/activities">
                Activities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
