import React from "react";
import { NotFoundContainerS, PageContainerS } from "./styles/ContainerS";
import { GoBackBtn } from "./styles/ButtonS";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainerS
      notFound
      style={{ textAlign: "center", paddingTop: "3rem" }}
    >
      <NotFoundContainerS>
        <h1 style={{ color: "#1b2e35" }}>OOPS! PAGE NOT FOUND</h1>
        <GoBackBtn onClick={() => navigate("/")}>Go Home</GoBackBtn>
      </NotFoundContainerS>
    </PageContainerS>
  );
};

export default NotFound;
