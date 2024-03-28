import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FooterContainerS } from "./styles/ContainerS";
import { FooterLi, FooterUl } from "./styles/ListS";
import { FooterCopyrightH4 } from "./styles/HeaderS";

const Footer = () => {
  return (
    <FooterContainerS>
      <div className="copyright">
        <FooterCopyrightH4>
          Copyright &copy; omrfrkcpr {new Date().getFullYear()}
        </FooterCopyrightH4>
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
