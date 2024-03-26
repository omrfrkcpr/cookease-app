import React from "react";
import ComingSoon from "../assets/ComingSoon.png";
import {
  EmptyContainerS,
  PageContainerS,
} from "../components/styles/ContainerS";
import { ComingSoonImg } from "../components/styles/ImageS";
import LoginRegisterForm from "../components/LoginRegisterForm";

const Register = () => {
  return (
    // <EmptyContainerS>
    //   <ComingSoonImg src={ComingSoon} alt="coming-soon" />
    // </EmptyContainerS>
    <PageContainerS login>
      <LoginRegisterForm formType="register" />
    </PageContainerS>
  );
};

export default Register;
