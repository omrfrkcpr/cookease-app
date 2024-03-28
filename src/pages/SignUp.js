import React from "react";
import { PageContainerS } from "../components/styles/ContainerS";
import LoginForm from "../components/LoginForm";

const SignUp = () => {
  return (
    <PageContainerS register>
      <LoginForm formType="signup" />
    </PageContainerS>
  );
};

export default SignUp;
