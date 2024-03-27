import React, { useEffect, useState } from "react";
import { NotFoundContainerS, PageContainerS } from "./styles/ContainerS";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === 0 ? prev : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count === 0) {
    return <Navigate to="/home" />;
  }
  return (
    <PageContainerS
      notFound
      style={{ textAlign: "center", paddingTop: "3rem" }}
    >
      <NotFoundContainerS>
        <h1 style={{ color: "#1b2e35" }}>OOPS! PAGE NOT FOUND</h1>
        <p>
          Within <strong>{count}</strong> seconds, you will be redirected to the
          home page!
        </p>
      </NotFoundContainerS>
    </PageContainerS>
  );
};

export default NotFound;
