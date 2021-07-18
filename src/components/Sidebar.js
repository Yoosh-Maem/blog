import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuClick = (event) => {
    var menu = document.getElementsByClassName("sidebar-title");
    var index = document.getElementsByClassName("sidebar-content");
    var content = document.getElementsByClassName("sidebar-index-content");
    console.log(content.length);
    for (var i = 0; i < menu.length; i++) {
      if (menu[i] === event.target) {
        if (index[i].style.display == "block") {
          index[i].style.display = "none";
          for (var j = 0; j < content.length; j++) {
            content[j].style.display = "none";
          }
        } else {
          index[i].style.display = "block";
        }
      }
    }
  };

  // const indexOnClick = (event) => {
  //   var index = document.getElementsByClassName("sidebar-index");
  //   var content = document.getElementsByClassName("sidebar-index-content");

  //   for (var i = 0; i < index.length; i++) {
  //     if (index[i] === event.target) {
  //       if (content[i].style.display == "block") {
  //         content[i].style.display = "none";
  //       } else {
  //         content[i].style.display = "block";
  //       }
  //     }
  //   }
  // };
  return (
    <ul class="sidebar">
      <li class="sidebar-item">
        <span class="sidebar-title" onClick={menuClick}>
          자바스크립트
        </span>
        <ul class="sidebar-content">
        
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index">0. 시작하기 앞서</li>
          </Link>
    
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index">  1. 자바스크립트 기초</li>
          </Link>
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index">2. 객체지향 자바스크립트</li>
          </Link>
         
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index">3. Node.js 소개</li>
          </Link>
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index" >4. Node.js 설치</li>
          </Link>
      
         
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index">5. Node.js 간단한 실습</li>
          </Link>
          
          <Link to="/JsIndex0"  style={{ textDecoration: 'none' }}>
            <li class="sidebar-index"> 6. Node.js 기본 모듈과 기초</li>
          </Link>
        
         
        </ul>
      </li>
      <li class="sidebar-item">
      <span class="sidebar-title" onClick={menuClick}>
      Node.js
        </span>
      </li>
    </ul>
  );
};

export default Sidebar;
