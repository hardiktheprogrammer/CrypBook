import React from "react";
import logo from "../assets/crypBook-logo.png";
import {  BsTwitter,  BsGithub } from "react-icons/bs";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
   
    {
      title: "Contact",
      data: ["Contact Us"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Github"],
    },
  ];
  const socialLink = [
    
    <BsTwitter />,
    <BsGithub/>
    
    
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <p>Follow us on </p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 CrypBook</span>
        <span></span>
      </div>
    </footer>
  );
}
