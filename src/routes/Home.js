import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div class="wapper">
      <MainHeader />
      <div class="contents">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
