import React from "react";

const Spinner = ({ text }) => {
  return (
    <div className="spinnerContainer">
      <svg class="spinner" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>
      <div>{text}</div>
    </div>
  );
};

export default Spinner;
