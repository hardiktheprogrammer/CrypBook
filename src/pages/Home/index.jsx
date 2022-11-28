import React from "react";
import { Helmet } from "react-helmet";

// COMPONENTS
import Free from "../../components/Free";
import HomeComponent from "../../components/HomeComponent";
import Like from "../../components/Like";
import Release from "../../components/Release";

const Home = () => {
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <>
      <Helmet>
        <title>CrypBook | Home</title>
      </Helmet>
      <HomeComponent />
      <Free />
      {/* <Clients /> */}
      {/* <SuperRare /> */}
      <Release />
      <Like />
    </>
  );
};

export default Home;
