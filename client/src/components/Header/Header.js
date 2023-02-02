import React from "react";
import Popup from "reactjs-popup";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import BurgerMenuList from "../BurgerMenuList/BurgerMenuList";
import "./Header.styles.css";
import NavBar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="burger-icon">
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerMenuIcon open={open} />}
        >
          {(close) => <BurgerMenuList close={close} />}
        </Popup>
      </div>
    </header>
  );
};

export default Header;
