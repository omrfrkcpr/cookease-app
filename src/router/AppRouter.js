import React from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import Login from "../pages/Login";
import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/details/:food" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
