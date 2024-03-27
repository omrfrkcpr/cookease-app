import React from "react";
import { AppContextComp } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { FormS, LoginFormContainerS } from "./styles/ContainerS";
import { FormInputS } from "./styles/InputS";
import { LoginBtn } from "./styles/ButtonS";
import { FormH3 } from "./styles/HeaderS";

const LoginForm = () => {
  const { setIsLoggedIn } = AppContextComp();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <LoginFormContainerS>
      <FormH3 style={{ color: "white" }}>Cookease App</FormH3>
      <FormS onSubmit={handleSubmit}>
        <FormInputS type="text" required placeholder="Enter random username" />
        <FormInputS
          type="password"
          required
          placeholder="Enter random password"
        />
        <LoginBtn type="submit">Login</LoginBtn>
      </FormS>
    </LoginFormContainerS>
  );
};

export default LoginForm;