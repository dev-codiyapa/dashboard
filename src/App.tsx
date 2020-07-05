import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home.component";
import "antd/dist/antd.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CovidDetailsReport from "./pages/details/Details.component";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route
            path="/detailed_view"
            component={CovidDetailsReport}
            exact={false}
          />
        </Switch>
      </Router>
  );
}

export default App;
