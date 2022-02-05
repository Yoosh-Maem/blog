import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import ContentBox from "../components/ContentBox";
import ContentWrap from "../components/ContentWrap";

function Home() {
  return (
    <div class="wapper">
      <MainHeader />
      <div class="contents">
        {/* <Sidebar /> */}

        <ContentWrap>
          <ContentBox
            info={{ title: "java", icon: <i class="fab fa-node"></i> }}
          />
          <ContentBox
            info={{ title: "mysql", icon: <i class="fab fa-node"></i> }}
          />
          <ContentBox
            info={{ title: "mysql", icon: <i class="fab fa-node"></i> }}
          />
        </ContentWrap>
      </div>
    </div>
  );
}

export default Home;
