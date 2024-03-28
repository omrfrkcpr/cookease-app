import React, { useState } from "react";
import { AppContextComp } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";
import {
  CenterAlignForm,
  FormS,
  LoginFormContainerS,
} from "./styles/ContainerS";
import { FormInputS, FormLabelS } from "./styles/InputS";
import { LoginBtn } from "./styles/ButtonS";
import { FormH3 } from "./styles/HeaderS";

const LoginForm = ({ formType }) => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isRegistered,
    setIsRegistered,
    username,
    setUsername,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    localUsername,
    setLocalUsername,
    localPassword,
    setLocalPassword,
  } = AppContextComp();

  const [isForgot, setIsForgot] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === "login") {
      // Kullanıcı adı ve şifrenin kontrolü
      if (username === localUsername && password === localPassword) {
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        if (username !== localUsername) {
          window.alert("Username is incorrect.");
        } else if (password !== localPassword) {
          window.alert("Password is incorrect.");
        }
      }
    } else if (formType === "signup" && confirmPass === localPassword) {
      setIsRegistered(true);
      navigate("/login");
    } else {
      if (confirmPass !== localPassword) {
        window.alert("Passwords do not match.");
      }
    }
  };

  const handleUsername = (e) => {
    if (formType === "login") {
      setUsername(e.target.value);
    } else if (formType === "signup") {
      setLocalUsername(e.target.value);
      localStorage.setItem("localUsername", e.target.value);
    }
  };

  const handlePassword = (e) => {
    if (formType === "login") {
      setPassword(e.target.value);
    } else if (formType === "signup") {
      setLocalPassword(e.target.value);
      localStorage.setItem("localPassword", e.target.value);
    }
  };

  const handleConfirm = (e) => {
    setConfirmPass(e.target.value);
    localStorage.setItem("localComfirmPassword", e.target.value);
  };

  const handleGetInfo = () => {
    if (isRegistered) {
      setIsForgot(true);
      setUsername(localUsername);
      setPassword(localPassword);
    } else {
      navigate("/signup");
    }
  };

  const handleUsernameValue = () => {
    if (formType === "login") {
      if (isForgot) {
        return localStorage.getItem("localUsername");
      } else return username;
    } else if (formType === "signup") {
      return localUsername;
    }
  };

  const handlePasswordValue = () => {
    if (formType === "login") {
      if (isForgot) {
        return localStorage.getItem("localPassword");
      }
      return password;
    } else if (formType === "signup") {
      return localPassword;
    }
  };

  const handleConfirmValue = () => {
    if (isForgot) {
      return localStorage.getItem("confirmPass");
    } else return confirmPass;
  };

  return (
    <LoginFormContainerS>
      <FormH3 style={{ color: "black" }}>Cookease App</FormH3>
      <FormS onSubmit={handleSubmit}>
        <CenterAlignForm>
          <FormLabelS htmlFor="username">Username*</FormLabelS>
          <FormInputS
            type="text"
            required
            id="username"
            placeholder="Enter username"
            value={handleUsernameValue()}
            onChange={(e) => handleUsername(e)}
          />
        </CenterAlignForm>
        <CenterAlignForm>
          <FormLabelS htmlFor="password">Password*</FormLabelS>
          <FormInputS
            type="password"
            id="password"
            required
            placeholder="Enter password"
            value={handlePasswordValue()}
            onChange={(e) => handlePassword(e)}
          />
        </CenterAlignForm>
        {formType === "signup" && (
          <CenterAlignForm>
            <FormLabelS htmlFor="password">Confirm Password*</FormLabelS>
            <FormInputS
              type="password"
              id="password"
              required
              placeholder="Confirm password"
              value={handleConfirmValue()}
              onChange={(e) => handleConfirm(e)}
            />
          </CenterAlignForm>
        )}

        {formType === "login" ? (
          <LoginBtn type="submit">Login</LoginBtn>
        ) : (
          <LoginBtn type="submit">Sign Up</LoginBtn>
        )}
        {formType === "login" && (
          <div>
            {!isRegistered && (
              <div style={{ marginTop: "1rem" }}>
                Need An Account?{" "}
                <button onClick={() => navigate("/signup")}>Sign Up</button>
              </div>
            )}
            <div style={{ marginTop: "1rem" }}>
              Forgot Password?{" "}
              <button onClick={() => handleGetInfo()}>Get Info</button>
            </div>
          </div>
        )}
      </FormS>
    </LoginFormContainerS>
  );
};

export default LoginForm;
