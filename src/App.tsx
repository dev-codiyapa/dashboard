import React from "react";
import "./App.css";
import Home from "./pages/home/Home.component";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CovidDetailsReport from "./pages/details/Details.component";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detailed_view">
          <CovidDetailsReport />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
