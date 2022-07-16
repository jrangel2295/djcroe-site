import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="top">
      <div className="header-pic" >
        <img
          alt="top"
          style={{ width: "10em", height: "8em" }}
          src="../Assets/djlogo.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
