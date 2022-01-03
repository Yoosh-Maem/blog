import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul class="sidebar">
      <div style={{ color: "blueviolet" }}>공부 주제</div>
      <li class="sidebar-item">
        <Link to="/JsIndex0" style={{ textDecoration: "none" }}>
          <span class="sidebar-title">자바스크립트&Node.js</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
