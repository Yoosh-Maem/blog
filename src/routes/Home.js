import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import ContentBox from "../components/ContentBox";
import ContentWrap from "../components/ContentWrap";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div class="wapper">
      <MainHeader />
      <div class="contents">
        {/* <Sidebar /> */}

        <ContentWrap>
          <Link to="/JsIndex0" style={{ textDecoration: "none" }}>
            <ContentBox
              info={{ title: "java", icon: <i class="fab fa-node"></i> }}
            />
          </Link>

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
