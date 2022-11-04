import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/decentralized.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
          <img className = "decentralized" src={eth2} alt="eth2" />           
          </div>
          <h2 className="title">Completely Decetralized</h2>
          <p className="description">
           ------2
          </p>
          <p className="description">
          ---------2
          </p>
        </div>
        <div className="content">
          <div className="image">
          <img src={eth1} alt="eth1" />
          </div>
        <h2 className="title">100% TrustWorthy</h2>
          <p className="description">
            -----------1
          </p>
          <p className="description">
          ----------2
          </p>
        </div>
      </div>
    </div>
  );
}
