import React from "react";
import "./emailList.css";

export default function EmailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time,save money!</h1>
      <span className="mailDesc">
        Sign up and we will send best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" className="mailInput" placeholder="your email" />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  );
}
