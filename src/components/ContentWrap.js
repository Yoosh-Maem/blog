import React from "react";
import "./ContentWrap.css";

//컴포넌트안에 컴포넌트 넣을시 children 사용해야함
const ContentWrap = ({ children }) => {
  return <div className="content_wrap">{children}</div>;
};

export default ContentWrap;
