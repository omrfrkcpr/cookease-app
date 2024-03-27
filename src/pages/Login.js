import React from "react";
import { PageContainerS } from "../components/styles/ContainerS";
import LoginRegisterForm from "../components/LoginRegisterForm";

const Login = () => {
  return (
    <PageContainerS login>
      <LoginRegisterForm />
    </PageContainerS>
  );
};

export default Login;
