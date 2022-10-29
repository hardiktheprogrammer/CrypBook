import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/send-recieve-money.png";
import release2 from "../assets/lend-money.png";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Receive and Send money</h2>
          <p className="description">
          Pay anyone, everywhere. Make contactless & secure payments online using your crypto wallet 
          . Plus, receive money from anyone. 
          </p>
          <p className="description">
          VIshuS offers secure, transparent and risk-free banking at your fingertips. <br></br>
          </p>
          <p className="description">With instant transacations  and cryptocureency experience the future of banking today.</p>
          
        </div>
        <div className="image">
          <img classname="money" src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
        <img className="landing" src={release2} alt="release" />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Lend money</h2>
          <p className="description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          {/* <p className="description">50% of proceeds go to charity.</p> */}
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
