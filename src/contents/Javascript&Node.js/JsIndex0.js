import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MainHeader from "../../components/MainHeader";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import { render } from "react-dom";
import "../../components/common.css";
import ReactMarkDownEditor from "../../components/ReactMarkDownEditor";
import { FSx } from "aws-sdk";
import fs from "fs";
import { readFileSync } from "fs";
import axios from "axios";

const JsIndex0 = () => {
  const [isLoading, setIsLoading] = useState("");

  console.log(isLoading);
  useEffect(() => {
    console.log(123);
    axios({
      method: "get",
      url: "https://test-a12345.s3.ap-northeast-2.amazonaws.com/javascript/JavascriptNodejs.txt",
      headers: {
        Host: "Bucket.s3.amazonaws.com",
      },
    }).then(function (respnse) {
      console.log(respnse.data);
      setIsLoading(respnse.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <MainHeader />
      <div className="container">
        <Sidebar />

        <div className="contents">
          <ReactMarkDownEditor text={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default JsIndex0;
