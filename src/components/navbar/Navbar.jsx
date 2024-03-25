import React from "react";
import logo from "../../assets/logo.png";
import { LogoS } from "../styles/ImageS";
import { Link } from "react-router-dom";
import { NavbarContainerS } from "../styles/ContainerS";
import { NavbarLi, NavbarUl } from "./NavbarS";

const linkStyle = {
  textDecoration: "none",
  color: "rgba(255, 102, 45, 1)",
};

const Navbar = () => {
  return (
    <NavbarContainerS>
      <div className="left">
        <LogoS src={logo} alt="logo" width="150px" />
      </div>
      <NavbarUl className="right">
        <NavbarLi>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link to="/favorites" style={linkStyle}>
            Favorites
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </NavbarLi>
      </NavbarUl>
    </NavbarContainerS>
  );
};

export default Navbar;
