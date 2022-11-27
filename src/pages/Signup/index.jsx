import React, { useState } from "react";
import { Helmet } from "react-helmet";

// ASSETS
import signUpImage from "./../../assets/manage.png";
import logo from "./../../assets/crypBook-logo.png";
import CreateCrypBook from "./components/CreateCrypBook";
import MobileOTP from "./components/MobileOTP";
import UserDetails from "./components/UserDetails";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [crypName, setCrypName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userFullName, setUserFullName] = useState("");

  const increaseStep = () => {
    setStep(step + 1);
  };

  const handleFinalSubmit = () => {
    console.log(
      "** FINAL USER DATA TO BE SEND TO BACKEND: ",
      crypName,
      userMobile,
      userFullName
    );
  };

  const renderBodyAsPerStep = (step) => {
    if (step === 1)
      return (
        <CreateCrypBook
          increaseStep={increaseStep}
          saveCrypName={(name) => setCrypName(name)}
        />
      );
    if (step === 2)
      return (
        <MobileOTP
          increaseStep={increaseStep}
          saveMobile={(mobile) => setUserMobile(mobile)}
        />
      );
    if (step === 3)
      return (
        <UserDetails
          increaseStep={increaseStep}
          saveFullName={(name) => setUserFullName(name)}
          finalSubmit={handleFinalSubmit}
        />
      );
  };
  return (
    <>
      <Helmet>
        <title>CrypBook | Register</title>
      </Helmet>
      <div className="signup">
        <div className="container">
          <div className="image-container">
            <div className="image">
              <img className="manage" src={signUpImage} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
            </div>
          </div>
          <div className="content">
            <div className="cardForm">
              <div className="brandRow">
                <img src={logo} height={80} />
                <p className="brandName">{step === 1 ? "Login" : "Register"}</p>
              </div>
              <div className="formRow">
                <div className="createCrypBookContainer">
                  {renderBodyAsPerStep(step)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
