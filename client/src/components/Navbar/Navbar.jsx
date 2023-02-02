import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <i>Book Shop</i>
      <ul>
        <NavLink to="/">
          <li>Start</li>
        </NavLink>
        <NavLink to="/Add">
          <li>Add Book</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
