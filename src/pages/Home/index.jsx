import React from "react";

// COMPONENTS
import Free from "../../components/Free";
import HomeComponent from "../../components/HomeComponent";
import Like from "../../components/Like";
import Release from "../../components/Release";

const Home = () => {
  return (
    <>
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
