import React from "react";
import { HeaderH1 } from "./HeaderS";
import { HeaderContainerS } from "../styles/ContainerS";
import Form from "../form/Form";

const Header = () => {
  return (
    <HeaderContainerS>
      <HeaderH1>CookEase App</HeaderH1>
      <Form />
    </HeaderContainerS>
  );
};

export default Header;
