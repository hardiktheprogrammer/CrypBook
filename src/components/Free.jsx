import React from "react";
import Card from "./Card";
import icon from "../assets/icons8-cryptocurrency-64.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Record Transactions </h2>
          <p className="description">
          Record debit and credit transactions for your customers send payment    <br></br>
          And More<br></br>
          </p>
          <p className="description">
          {/* With CrypBook, you can finally take control of your finances and start saving for the future. */}
          </p>
          
         
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}
