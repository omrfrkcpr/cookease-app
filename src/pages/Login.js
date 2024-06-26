import React from "react";
import { PageContainerS } from "../components/styles/ContainerS";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <PageContainerS login>
      <LoginForm formType="login" />
    </PageContainerS>
  );
};

export default Login;
