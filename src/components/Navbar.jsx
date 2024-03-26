import React from "react";
import logo from "../assets/logo.png";
import { LogoS } from "./styles/ImageS";
import { Link, useLocation } from "react-router-dom";
import { NavbarContainerS } from "./styles/ContainerS";
import { RecipeContextComp } from "../context/RecipeProvider";
import { NavbarLi, NavbarUl } from "./styles/ListS";
import { NavbarLink } from "./styles/SpanS";

const linkStyle = {
  textDecoration: "none",
  color: "rgba(0,0,0, 0.8)",
  fontWeight: "bolder",
};

const Navbar = () => {
  // get current url pathname from location
  const location = useLocation();
  const { username, password, mainUsername, mainPassword } =
    RecipeContextComp();

  return (
    <NavbarContainerS>
      <div className="left">
        <LogoS src={logo} alt="logo" />
      </div>
      <NavbarUl className="right">
        <NavbarLi>
          <Link to="/" style={linkStyle}>
            <NavbarLink isActive={location.pathname === "/"}>Home</NavbarLink>
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link to="/favorites" style={linkStyle}>
            <NavbarLink isActive={location.pathname === "/favorites"}>
              Favorites
            </NavbarLink>
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link to="/about" style={linkStyle}>
            <NavbarLink isActive={location.pathname === "/about"}>
              About
            </NavbarLink>
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link
            to={
              !username && !password && !mainUsername && !mainPassword
                ? "/register"
                : !username &&
                  !password &&
                  mainUsername &&
                  mainPassword &&
                  "/login"
            }
            style={linkStyle}
          >
            <NavbarLink
              isActive={
                location.pathname === "/login" ||
                location.pathname === "/register"
              }
            >
              {!username && !password && !mainUsername && !mainPassword
                ? "Register"
                : !username && !password && mainUsername && mainPassword
                ? "Login"
                : username && password
                ? "Logout"
                : "Login"}
            </NavbarLink>
          </Link>
        </NavbarLi>
      </NavbarUl>
    </NavbarContainerS>
  );
};

export default Navbar;
