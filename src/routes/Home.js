import React from "react";
import BlogNavbar from "../components/BlogNavbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div class="wapper">
      <BlogNavbar />
      <div class="contents">
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
