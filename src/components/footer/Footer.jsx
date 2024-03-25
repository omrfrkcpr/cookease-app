import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FooterContainerS } from "../styles/ContainerS";
import { FooterLi, FooterUl } from "./FooterS";

const Footer = () => {
  return (
    <FooterContainerS>
      <div className="copyright">
        <h1
          style={{
            color: "rgba(232, 51, 48, 1)",
            borderBottom: "1px solid gray",
          }}
        >
          Copyright &copy; omrfrkcpr {new Date().getFullYear()}
        </h1>
      </div>
      <FooterUl className="social-media">
        <FooterLi>
          <a href="https://github.com/omrfrkcpr">
            <FaGithubSquare style={{ color: "black" }} />
          </a>
        </FooterLi>
        <FooterLi>
          <a href="https://www.linkedin.com/in/omrfrkcpr/">
            <FaLinkedin style={{ color: "0A66C2" }} />
          </a>
        </FooterLi>
        <FooterLi>
          <a href="#instagram">
            <FaInstagramSquare style={{ color: "C43C81" }} />
          </a>
        </FooterLi>
        <FooterLi>
          <a href="mailto:omerrfarukcapur@gmail.com">
            <IoMail style={{ color: "#45ADF0" }} />
          </a>
        </FooterLi>
      </FooterUl>
    </FooterContainerS>
  );
};

export default Footer;
