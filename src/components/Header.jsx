import React from "react";
import { HeaderContainerS } from "./styles/ContainerS";
import SearchForm from "./SearchForm";
import { HeaderH1 } from "./styles/HeaderS";

const Header = () => {
  return (
    <HeaderContainerS>
      <HeaderH1>CookEase App</HeaderH1>
      <SearchForm />
    </HeaderContainerS>
  );
};

export default Header;
