import React from "react";
import ReactMarkdown from "react-markdown";
import BlogNavbar from "../../components/BlogNavbar";
import Sidebar from "../../components/Sidebar";
import { render } from "react-dom";
import "../../components/common.css";

const JsIndex0 = () => {
  return (
    <div class="wrapper">
      <BlogNavbar />
      <div class="contents">
        <Sidebar />
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </div>
    </div>
  );
};

export default JsIndex0;
