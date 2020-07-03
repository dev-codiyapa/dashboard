import React, { Component } from "react";
import { IHomeprops, IHomestate } from "./interfaces";
import "./Home.component.css";
import Summary from "../../components/covid/summary/Summary.component";
import PageLayout from "../../Layout/Layout.component";

class Home extends Component<IHomeprops, IHomestate> {
  render() {
    return <PageLayout componentName={<Summary />} />;
  }
}

export default Home;
