import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenuList.styles.css";

export default function BurgerMenuList({ close }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={close} activeclassName="current" to="/">
            START
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeclassName="current" to="Add">
            Add Book
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
