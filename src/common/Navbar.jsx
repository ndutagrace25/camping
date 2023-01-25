import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log("width:" + window.innerWidth);
  console.log("height:" + window.innerHeight);
  return (
    <nav className="navbar navbar-expand-lg text-white fw-bold">
      <div className="container">
        <Link className="navbar-brand" to="/">
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

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="col-md-12 d-flex  justify-content-end pe-5 me-5">
            <div className="navbar-nav pe-5 me-5">
              <Link
                className="nav-link active pe-5 me-5"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link className="nav-link pe-5 me-5" to="/activities">
                Activities
              </Link>
              <Link className="nav-link" to="/my-map">
                My Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
