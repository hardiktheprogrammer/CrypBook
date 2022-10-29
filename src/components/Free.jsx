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
          <h2 className="title">Track Where your Money Goes</h2>
          <p className="description">
          If you're like most people, you have a hard time keeping track of your spending.<br></br>
          You know you need to save money, but it's tough to do when you're not sure <br></br> where your money is going.<br></br>
          </p>
          <p className="description">
          With VishuS, you can finally take control of your finances and start saving for the future.
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
