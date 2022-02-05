import React from "react";

import "./MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <div className="center">
        <Link to="/" className="header_main">
          <div className="header_main_title">Yoosh & MaeM</div>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
