import React from "react";
import { AppContextComp } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { FormS, LoginRegisterFormContainerS } from "./styles/ContainerS";
import { FormInputS } from "./styles/InputS";
import { LoginRegisterBtn } from "./styles/ButtonS";

const LoginRegisterForm = ({ formType }) => {
  const { setIsLoggedIn } = AppContextComp();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <LoginRegisterFormContainerS>
      <h3 style={{ color: "white" }}>Cookease App</h3>
      <FormS onSubmit={handleSubmit}>
        <FormInputS type="text" required placeholder="Enter random username" />
        <FormInputS
          type="password"
          required
          placeholder="Enter random password"
        />
        <LoginRegisterBtn type="submit">Login</LoginRegisterBtn>
      </FormS>
    </LoginRegisterFormContainerS>
  );
};

export default LoginRegisterForm;
