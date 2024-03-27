import React from "react";
import logo from "../assets/logo.png";
import { LogoS } from "./styles/ImageS";
import { Link, useLocation } from "react-router-dom";
import { NavbarContainerS } from "./styles/ContainerS";
import { AppContextComp } from "../context/AppProvider";
import { NavbarLi, NavbarUl } from "./styles/ListS";
import { FavoritesSpan, NavbarLink } from "./styles/SpanS";
import { NavbarLinkBtn } from "./styles/ButtonS";

const linkStyle = {
  textDecoration: "none",
  color: "rgba(0,0,0, 0.8)",
  fontWeight: "bolder",
};

const Navbar = () => {
  // get current url pathname from location
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn, favorites } = AppContextComp();

  return (
    <NavbarContainerS>
      <div className="left">
        <LogoS src={logo} alt="logo" />
      </div>
      <NavbarUl className="right">
        <NavbarLi>
          <Link to="/home" style={linkStyle}>
            <NavbarLink isActive={location.pathname === "/home"}>
              Home
            </NavbarLink>
          </Link>
        </NavbarLi>
        <NavbarLi>
          <Link to="/favorites" style={linkStyle}>
            <NavbarLink
              isActive={location.pathname === "/favorites"}
              style={{ position: "relative" }}
            >
              Favorites{" "}
              <FavoritesSpan>
                {favorites.length > 0 && favorites.length}
              </FavoritesSpan>
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
          {isLoggedIn ? (
            <NavbarLinkBtn onClick={() => setIsLoggedIn(false)}>
              <NavbarLink isActive={location.pathname === "/login"}>
                Logout
              </NavbarLink>
            </NavbarLinkBtn>
          ) : (
            <Link to={"/login"} style={linkStyle}>
              <NavbarLink
                isActive={location.pathname === "/login"}
                style={{ marginRight: "2rem" }}
              >
                Login
              </NavbarLink>
            </Link>
          )}
        </NavbarLi>
      </NavbarUl>
    </NavbarContainerS>
  );
};

export default Navbar;
