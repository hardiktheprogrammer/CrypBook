import React from "react";
import home from "../assets/landing-page-main.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">manage your business & Ledger with </p>
          <h1 className="title">Cryp <span className="book">Book</span></h1>
          <p className="description">
          Manage your money in better & more secure  way with  CrypBook-Protocol
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
