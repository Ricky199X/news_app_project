import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/" className="brand-logo">
          News App
        </Link>
        {/* <a href="#" class="brand-logo">
        </a> */}
        <ul class="right" id="nav-options">
          <li>
            <Link to="/dashboard">Dashboard</Link>
            {/* <a href="#">Dashboard</a> */}
          </li>
          <li>
            <Link to="/stories">Stories</Link>
            {/* <a href="#">Stories</a> */}
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            {/* <a href="#">Favorites</a> */}
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
