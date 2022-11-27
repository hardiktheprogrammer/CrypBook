import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="aboutPage">
      <Helmet>
        <title>CrypBook | About</title>
      </Helmet>
      <h3>Team Members:</h3>
      <br />
      <ul>
        <li>Hardik Sharma</li>
        <li>Mayank Kumar</li>
        <li>Priyaka Prasad</li>
      </ul>
    </div>
  );
};

export default About;
