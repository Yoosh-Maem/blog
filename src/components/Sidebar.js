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

  const indexOnClick = (event) => {
    var index = document.getElementsByClassName("sidebar-index");
    var content = document.getElementsByClassName("sidebar-index-content");

    for (var i = 0; i < index.length; i++) {
      if (index[i] === event.target) {
        if (content[i].style.display == "block") {
          content[i].style.display = "none";
        } else {
          content[i].style.display = "block";
        }
      }
    }
  };
  return (
    <ul class="sidebar">
      <li class="sidebar-item">
        <span class="sidebar-title" onClick={menuClick}>
          자바스크립트 & node.js
        </span>
        <ul class="sidebar-content">
          <li class="sidebar-index" onClick={indexOnClick}>
            0. 시작하기 앞서
          </li>
          <ul class="sidebar-index-content">
            <Link to="/JsIndex0">
              <li>0-1. 자바스크립트란?</li>
            </Link>
            <Link>
              <li>0-2. 자바스크립트의 특징</li>
            </Link>
            <Link>
              <li>0-3. 자바스크립트 엔진이란?</li>
            </Link>
          </ul>
          <li class="sidebar-index" onClick={indexOnClick}>
            1. 자바스크립트 기초
          </li>
          <ul class="sidebar-index-content">
            <Link>
              <li>1-1. 기본 문법</li>
            </Link>
            <Link>
              <li>1-2. 연산자</li>
            </Link>
            <Link>
              <li>1-3. 데이터 타입</li>
            </Link>
            <Link>
              <li>1-4. 조건문</li>
            </Link>
            <Link>
              <li>1-5. 반복문</li>
            </Link>
            <Link>
              <li>1-6. 함수</li>
            </Link>
          </ul>
          <li class="sidebar-index" onClick={indexOnClick}>
            2. 객체지향 자바스크립트
          </li>
          <ul class="sidebar-index-content">
            <Link>
              <li>2-1. 클래스</li>
            </Link>
            <Link>
              <li>2-2. 생성자</li>
            </Link>
            <Link>
              <li>2-3. 캡슐화</li>
            </Link>
            <Link>
              <li>2-4. 집합</li>
            </Link>
            <Link>
              <li>2-5. 상속</li>
            </Link>
            <Link>
              <li>2-6. 스코프와 호이스팅</li>
            </Link>
            <Link>
              <li>2-7. 클로저</li>
            </Link>
          </ul>
          <li class="sidebar-index" onClick={indexOnClick}>
            3. Node.js 소개
          </li>
          <ul class="sidebar-index-content">
            <Link>
              <li>3-1. 개요</li>
            </Link>
            <Link>
              <li>3-2. 이벤트 기반 비동기 방식</li>
            </Link>
            <Link>
              <li>3-3. 그 외 특징들</li>
            </Link>
            <Link>
              <li>3-4. 아키텍처</li>
            </Link>
          </ul>
          <Link>
            <li class="">4. Node.js 설치</li>
          </Link>

          <li class="sidebar-index" onClick={indexOnClick}>
            5. Node.js 간단한 실습
          </li>
          <ul class="sidebar-index-content">
            <Link>
              <li>5-1. 웹 서버</li>
            </Link>
            <Link>
              <li>5-2. 파일 입출력</li>
            </Link>
            <Link>
              <li>5-2. 비동기 이벤트</li>
            </Link>
          </ul>
          <li class="sidebar-index" onClick={indexOnClick}>
            6. Node.js 기본 모듈과 기초
          </li>
          <ul class="sidebar-index-content">
            <Link>
              <li>6-1. 노드의 모듈화 개념</li>
            </Link>
            <Link>
              <li>6-2. 전역 객체</li>
            </Link>
            <Link>
              <li>6-3. 모듈의 종류</li>
            </Link>
            <Link>
              <li>6-4. 기본 모듈들 사용법</li>
            </Link>
          </ul>
        </ul>
      </li>
      <li class="sidebar-item"></li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
      <li class="sidebar-item">
        <a href="">1</a>
      </li>
    </ul>
  );
};

export default Sidebar;
