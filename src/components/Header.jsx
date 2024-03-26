import React from "react";
import { HeaderContainerS } from "./styles/ContainerS";
import SearchForm from "./SearchForm";
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
      <SearchForm />
    </HeaderContainerS>
  );
};

export default Header;
