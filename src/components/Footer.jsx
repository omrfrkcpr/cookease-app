import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FooterContainerS } from "./styles/ContainerS";
import styled from "styled-components";

const Footer = () => {
  const FooterUl = styled.ul`
    display: flex;
    gap: 2rem;
    height: 1rem;
    justify-content: right;
    align-items: center;
    width: 50%;

    @media screen and (max-width: ${({ theme }) => theme.responsive}) {
      gap: 1rem;
      margin: auto;
      text-align: center;
      justify-content: center;
      padding-right: 1.5rem;
    }
  `;

  const FooterLi = styled.li`
    list-style-type: none;
    font-size: 2.5rem;
    width: 40px;
    &:hover {
      font-size: 2rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.responsive}) {
      font-size: 1.5rem;
      &:hover {
        font-size: 1rem;
      }
    }
  `;
  return (
    <FooterContainerS>
      <div className="copyright">
        <h4
          style={{
            color: "rgba(232, 51, 48, 1)",
            borderBottom: "1px solid gray",
          }}
        >
          Copyright &copy; omrfrkcpr {new Date().getFullYear()}
        </h4>
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
