import React, { Component } from "react";
import { IHomeprops, IHomestate } from "./interfaces";
import SieBarMenu from "../../components/menu/Menu.component";
import { Layout } from "antd";
import PageHeader from "../../components/header/Header.component";
import "./Home.component.css";
import Summary from "../../components/covid/summary/Summary.component";
import PageFooter from "../../components/Footer/Footer.component";

const { Content, Footer } = Layout;
class Home extends Component<IHomeprops, IHomestate> {
  state = {
    collapsed: false
  };
  toggle = () => {
    console.log("m in toggle", this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <>
        <Layout className="home-page">
          <SieBarMenu collapsed={this.state.collapsed} />
          <Layout className="site-layout">
            <PageHeader toggle={this.toggle} collapsed={this.state.collapsed} />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280
              }}
            >
              <Summary />
            </Content>
            <PageFooter />
          </Layout>
        </Layout>
      </>
    );
  }
}

export default Home;
