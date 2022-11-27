import React, { useState } from "react";

const CreateCrypBook = ({
  saveCrypName = () => null,
  increaseStep = () => null,
}) => {
  const [ledgerName, setLedgerName] = useState("");

  const handleLedgerChange = (e) => {
    setLedgerName(e.target.value);
  };

  const handleGetStarted = () => {
    if (ledgerName === "") return;
    saveCrypName(ledgerName);
    increaseStep();
  };

  const disableGetStartedButton = ledgerName === "";
  return (
    <>
      <div className="title">Create Your first CrypBook</div>
      <div className="input">
        <input
          className="inputField"
          type="text"
          placeholder="Ledger Name"
          onChange={handleLedgerChange}
        />
      </div>
      <div className="getStarted">
        <button
          className={`buttonField ${
            disableGetStartedButton && `disabledButton`
          }`}
          disabled={disableGetStartedButton}
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default CreateCrypBook;
