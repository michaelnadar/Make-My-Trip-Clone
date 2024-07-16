import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/mmt.png";

const NavBar = () => {
  console.log("here iam");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">Admin Panel</a> */}
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Admin Panel Logo" style={{ height: "30px" }} />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/flight">
              Flights
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/hotel">
              Hotels
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
