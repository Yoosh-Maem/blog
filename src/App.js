import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import JsIndex0 from "./contents/Javascript&Node.js/JsIndex0";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/jsindex0" exact={true} component={JsIndex0} />
    </HashRouter>
  );
}

export default App;
