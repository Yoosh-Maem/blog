import React from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";

const mkdStr = "";

function ReactMarkDownEditor(props) {
  console.log(props.text);
  const [value, setValue] = React.useState(props.text);
  if (props.text != value) {
    setValue(props.text);
  }
  return (
    <div className="container">
      <MDEditor.Markdown source={value} />
    </div>
  );
}

export default ReactMarkDownEditor;
