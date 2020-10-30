import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red  darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          React Application
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Post</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/linechart">Line Chart</NavLink>
          </li>
          <li>
            <NavLink to="/studententry">Student Entry</NavLink>
          </li>
          {/* <li>
            <NavLink to="/fileupload">File Upload</NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
