// import React from "react";
// import { Helmet } from "react-helmet";

// const About = () => {
//   return (
//     <div className="aboutPage">
//       <Helmet>
//         <title>CrypBook | About</title>
//       </Helmet>
//       <h3>Team Members:</h3>
//       <br />
//       <ul>
//         <li>Hardik Sharma</li>
//         <li>Mayank Kumar</li>
//         <li>Priyaka Prasad</li>
//       </ul>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./index.scss";
import priyanka from "./priyanka.png";
import { AboutCard } from "../../components/ĀboutCard";
const About = () => {
  return (
    <>
      <div className="home">
        <div className="about-main">
          <AboutCard
            name="Hardik"
            role="Backend Developer"
            linkedin="https://www.linkedin.com/in/tgoyal63"
            github="https://github.com/tgoyal63"
            email="mailto:tgoyal63@duck.com"
            twitter="https://twitter.com/tgoyal63"
            img={priyanka}
            portfolio="https://flowcv.me/tgoyal63"
            dashboard="tgoyal63"
          />
          <AboutCard
            name="Priyanka Prasad"
            role="Web Designer"
            linkedin="https://www.linkedin.com/in/prykdev/"
            github="https://github.com/prykdev"
            email="mailto:priyankaafssulur@gmail.com"
            twitter="https://twitter.com/prykdev"
            img={priyanka}
            portfolio="https://priyankaprasad.vercel.app/"
            dashboard="prykdev"
          />
          <AboutCard
            name="Mayank"
            role="Full Stack Developer"
            linkedin="https://www.linkedin.com/in/ayu913"
            github="https://github.com/ayu913"
            email="mailto:ayushsingla909@gmail.com"
            twitter="https://twitter.com/ayu913"
            img={priyanka}
            portfolio="https://ayudev.vercel.app/"
            dashboard="ayu913"
          />
        </div>
      </div>
    </>
  );
};

export default About;
