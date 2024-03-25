import React from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Favorites from "../pages/favorites/Favorites";
import Login from "../pages/login/Login";
import NotFound from "../components/notFound/NotFound";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
