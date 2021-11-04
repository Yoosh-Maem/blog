import React from "react";

import "./MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <Link to="/" className="header_blog_icon">
        <i class="fas fa-memory lg"></i>
      </Link>

      <div className="header_main_title">Yoosh & MaeM</div>
    </header>
  );
};

export default MainHeader;
