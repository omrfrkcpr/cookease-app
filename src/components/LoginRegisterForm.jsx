import React from "react";
import { RecipeContextComp } from "../context/RecipeProvider";
import { useNavigate } from "react-router-dom";
import { FormS, LoginRegisterFormContainerS } from "./styles/ContainerS";
import { FormInputS } from "./styles/InputS";
import { LoginRegisterBtn } from "./styles/ButtonS";

const LoginRegisterForm = ({ formType }) => {
  const {
    setUsername,
    setPassword,
    username,
    password,
    mainUsername,
    setMainUsername,
    mainPassword,
    setMainPassword,
  } = RecipeContextComp();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "register") {
      localStorage.setItem("mainUsername", setUsername);
      localStorage.setItem("mainPassword", setPassword);
      navigate("/login");
    } else if (formType === "login") {
      navigate("/home");
    }
  };

  return (
    <LoginRegisterFormContainerS>
      <h3>Cookease App</h3>
      <FormS onSubmit={handleSubmit}>
        <FormInputS
          type="text"
          required
          placeholder="Enter username"
          value={formType === "login" ? username : mainUsername}
          onChange={(e) => {
            if (formType === "register") setMainUsername(e.target.value);
            if (formType === "login") setUsername(e.target.value);
          }}
        />
        <FormInputS
          type="password"
          required
          placeholder="Enter password"
          value={formType === "login" ? password : mainPassword}
          onChange={(e) => {
            if (formType === "register") setMainPassword(e.target.value);
            if (formType === "login") setPassword(e.target.value);
          }}
        />
        <LoginRegisterBtn type="submit">
          {formType === "login" ? "Login" : "Register"}
        </LoginRegisterBtn>
      </FormS>
    </LoginRegisterFormContainerS>
  );
};

export default LoginRegisterForm;