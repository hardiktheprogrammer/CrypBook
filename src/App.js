import "react-toastify/dist/ReactToastify.css";
// CSS
import "./sass/index.scss";

import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ScrollReveal from "scrollreveal";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// COMPONENTS
import About from "./pages/About/About";
import Features from "./pages/Features";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" />
      <Router>
        <div data-theme={theme} className="app-container">
          <ScrollToTop />
          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
