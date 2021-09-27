import React from "react";

import "./MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <Link to="/" className="header_blog_icon">
        아이콘자리
      </Link>

      <div className="header_main_title">Yoosh & MaeM</div>
    </header>
  );
};

export default MainHeader;
