import React, { useState } from "react";
import Spinner from "../../../../components/Spinner";

// LIBS
import { showWarningToast } from "../../../../libs/toastify";

const MobileOTP = () => {
  const [mobile, setMobile] = useState(null);
  const [otp, setOtp] = useState(null);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [otpReceived, setOTPReceived] = useState(false);

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };
  const disableSendOTPButton = mobile === null;

  const handleSendOTP = () => {
    if (mobile.length < 10) {
      showWarningToast("Mobile Number should be of 10 digit");
      return null;
    }
    setLoadingOTP(true);
    console.log(
      "**CALL THE FIREBASE API WITH MOBILE NUMBER TO GET OTP VERIFIED: ",
      mobile
    );
  };

  const handleVerifyOTP = () => {
    console.log("**CALL THE FIREBASE API TO VERIFY OTP: ", otp);
  };
  return (
    <>
      <div className="title">Enter Your Mobile Number</div>
      <div className="input">
        <input
          className="inputField"
          type="number"
          placeholder="Mobile Number"
          onChange={handleMobileChange}
          onWheel={(e) => e.target.blur()}
          disable={loadingOTP || otpReceived}
        />
      </div>
      {otpReceived && (
        <>
          <div className="title">Enter OTP</div>
          <div className="input">
            <input
              className="inputField"
              type="number"
              placeholder="One Time Password"
              onChange={handleOTPChange}
              onWheel={(e) => e.target.blur()}
            />
          </div>
        </>
      )}
      <div className="getStarted">
        {!loadingOTP && (
          <button
            className={`buttonField ${
              disableSendOTPButton && `disabledButton`
            }`}
            disabled={disableSendOTPButton}
            onClick={handleSendOTP}
          >
            SEND OTP
          </button>
        )}
        {otpReceived && (
          <button
            className={`buttonField ${
              disableSendOTPButton && `disabledButton`
            }`}
            disabled={disableSendOTPButton}
            onClick={handleVerifyOTP}
          >
            VERIFY OTP
          </button>
        )}
        {loadingOTP && <Spinner text="Sending OTP" />}
      </div>
    </>
  );
};

export default MobileOTP;
