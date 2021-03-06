import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        YOUR STREAM PLATFORM
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
