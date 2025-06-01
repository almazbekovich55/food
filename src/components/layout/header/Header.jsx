import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.svg"
import "./Header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img src={logo} alt="" />
          </div>
          <div className="header--nav">
            <Link to={"/"}>Menu</Link>
            <Link to={"/orders"}>Orders</Link>
            <Link to={"/admin"}>Admin</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
