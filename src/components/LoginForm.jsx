import React, { useEffect, useState } from "react";
import { AppContextComp } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";
import {
  CenterAlignForm,
  FormS,
  LoginFormContainerS,
} from "./styles/ContainerS";
import { FormInputS, FormLabelS } from "./styles/InputS";
import { HelpBtns, LoginBtn, PasswordVisibleBtn } from "./styles/ButtonS";
import { FormH3 } from "./styles/HeaderS";
import {
  Eye,
  EyeSlash,
  UserCircle,
  UserCirclePlus,
} from "@phosphor-icons/react";

const LoginForm = ({ formType }) => {
  const {
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

  const navigate = useNavigate();

  const [isForgot, setIsForgot] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [iconSize, setIconSize] = useState(48);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmToggle = () => {
    setConfirmVisible(!confirmVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setIconSize(64);
      } else if (window.innerWidth < 500) {
        setIconSize(48);
      } else {
        setIconSize(128);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleAnotherAccount = () => {
    setLocalPassword("");
    setPassword("");
    setUsername("");
    setLocalUsername("");
    setConfirmPass("");
    localStorage.clear();
    setIsRegistered(false);
    navigate("/signup");
  };

  return (
    <LoginFormContainerS>
      <div>
        {formType === "login" ? (
          <UserCircle size={iconSize} color="#6b675f" />
        ) : (
          <UserCirclePlus size={iconSize} color="#6b675f" />
        )}
      </div>
      <FormH3>Cookease App</FormH3>
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
        <CenterAlignForm style={{ position: "relative" }}>
          <FormLabelS htmlFor="password">Password*</FormLabelS>
          <FormInputS
            type={passwordVisible ? "text" : "password"}
            id="password"
            required
            placeholder="Enter password"
            value={handlePasswordValue()}
            onChange={(e) => handlePassword(e)}
          />
          <PasswordVisibleBtn type="button" onClick={handlePasswordToggle}>
            {passwordVisible ? (
              <Eye size={16} color="#6b675f" />
            ) : (
              <EyeSlash size={16} color="#6b675f" />
            )}
          </PasswordVisibleBtn>
        </CenterAlignForm>
        {formType === "signup" && (
          <CenterAlignForm style={{ position: "relative" }}>
            <FormLabelS htmlFor="password">Confirm Password*</FormLabelS>
            <FormInputS
              type="password"
              id="password"
              required
              placeholder="Confirm password"
              value={handleConfirmValue()}
              onChange={(e) => handleConfirm(e)}
            />

            <PasswordVisibleBtn type="button" onClick={handleConfirmToggle}>
              {confirmVisible ? (
                <Eye size={16} color="#6b675f" />
              ) : (
                <EyeSlash size={16} color="#6b675f" />
              )}
            </PasswordVisibleBtn>
          </CenterAlignForm>
        )}

        {formType === "login" ? (
          <LoginBtn type="submit" login>
            Login
          </LoginBtn>
        ) : (
          <LoginBtn type="submit" signup>
            Sign Up
          </LoginBtn>
        )}
        {formType === "login" && (
          <div>
            {isRegistered === false ? (
              <div style={{ marginTop: "1rem" }}>
                Need An Account?
                <HelpBtns onClick={() => navigate("/signup")}>Sign Up</HelpBtns>
              </div>
            ) : (
              <div style={{ marginTop: "1rem" }}>
                Need Another Account?
                <br />
                <HelpBtns onClick={() => handleAnotherAccount()}>
                  Create Account
                </HelpBtns>
              </div>
            )}
            <div>
              Forgot Password?
              <HelpBtns onClick={() => handleGetInfo()}>Get Info</HelpBtns>
            </div>
          </div>
        )}
      </FormS>
    </LoginFormContainerS>
  );
};

export default LoginForm;
