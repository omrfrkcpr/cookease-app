import React from "react";
import ComingSoon from "../assets/ComingSoon.png";
import { EmptyContainerS } from "../components/styles/ContainerS";
import { ComingSoonImg } from "../components/styles/ImageS";

const Login = () => {
  return (
    <EmptyContainerS>
      <ComingSoonImg src={ComingSoon} alt="coming-soon" />
    </EmptyContainerS>
  );
};

export default Login;
