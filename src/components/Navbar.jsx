import React from "react";
import logo from "../assets/logo.png";
import { LogoS } from "./styles/ImageS";
import { Link, useLocation } from "react-router-dom";
import { NavbarContainerS } from "./styles/ContainerS";
import styled from "styled-components";

const linkStyle = {
  textDecoration: "none",
  color: "rgba(0,0,0, 0.8)",
  fontWeight: "bolder",
};

const NavbarUl = styled.ul`
  display: flex;
  gap: 2rem;
  height: 2rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`;

const NavbarLi = styled.li`
  list-style-type: none;
  font-size: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1rem;
  }
`;

const NavbarLink = styled.span`
  color: ${({ isActive }) => (isActive ? "white" : "inherit")};

  &:hover {
    color: white;
  }
`;
const Navbar = () => {
  // get current url pathname from location
  const location = useLocation();

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
          <Link to="/login" style={linkStyle}>
            <NavbarLink isActive={location.pathname === "/login"}>
              Login
            </NavbarLink>
          </Link>
        </NavbarLi>
      </NavbarUl>
    </NavbarContainerS>
  );
};

export default Navbar;
