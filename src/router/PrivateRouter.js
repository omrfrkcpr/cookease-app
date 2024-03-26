import { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { username, password } = useContext(RecipeContext);

  return username === localStorage.getItem("mainUsername") &&
    password === localStorage.getItem("mainPassword") ? (
    <Outlet />
  ) : (
    <Navigate to="/register" />
  );
};

export default PrivateRouter;
