import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <Link to="/samuel">
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
      </Link>
    </div>
  );
};

export default Header;
