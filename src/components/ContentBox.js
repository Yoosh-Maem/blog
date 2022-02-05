import React from "react";
import "./ContentBox.css";

const ContentBox = (props) => {
  console.log(props.info);
  return (
    <div className="content_box_border">
      <div>{props.info.icon}</div>
      <div>{props.info.title}</div>
    </div>
  );
};

export default ContentBox;
