import React from "react";
import { HeaderContainerS } from "./styles/ContainerS";
import Form from "./Form";
import styled from "styled-components";

const HeaderH1 = styled.h1`
  color: black;
  text-align: center;
  padding: 2rem 0;
  /* background-color: rgb(255, 255, 255, 0.5); */
  @media screen and (max-width: ${({ theme }) => theme.responsiveSmall}) {
    font-size: 1.3rem;
    padding-bottom: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainerS>
      <HeaderH1>CookEase App</HeaderH1>
      <Form />
    </HeaderContainerS>
  );
};

export default Header;
