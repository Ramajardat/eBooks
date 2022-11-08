import React from "react";
import { NavLink } from "react-router-dom";
const logo = new URL("../logo12.png", import.meta.url);

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-light">
        <div className="container-fluid">
          <div className="logo-main">
            <img
              src={logo}
              alt=""
              height={"40px"}
              style={{ marginLeft: "5px" }}
            />
          </div>
          <NavLink className="navbar-brand text-light" to="/">
            Library
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
