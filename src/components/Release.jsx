import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/send-recieve-money.png";
import release2 from "../assets/lend-money.png";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Manage Your Crypto</h2>
          <p className="description">
         CryptoBook The ultimate way to manage your CryptCurrency


          </p>
          <p className="description">
         <br></br>
          </p>
          {/* <p className="description">With instant transacations  and cryptocureency experience the future of banking today.</p> */}
          
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
          <h2 className="title">100% Secure</h2>
          <p className="description">
            CrypBook is the perfect solution for recording crypto transactions. It's easy to use and provides the security you need to keep your data safe.<a href="#">Free</a>
          </p>
          
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
