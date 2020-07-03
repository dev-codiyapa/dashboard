import React, { Component } from "react";
import { ILayoutprops, ILayoutstate } from "./interfaces";
import SieBarMenu from "../components/menu/Menu.component";
import PageHeader from "../components/header/Header.component";
import { Layout } from "antd";
import "./Layout.component.css";
import PageFooter from "../components/Footer/Footer.component";
import PageContent from "./LayoutContent.component";

class PageLayout extends Component<ILayoutprops, ILayoutstate> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    console.log("supplied component is ===>", this.props.componentName);
  }

  render() {
    return (
      <>
        <Layout className="home-page">
          <SieBarMenu collapsed={this.state.collapsed} />
          <Layout className="site-layout">
            <PageHeader toggle={this.toggle} collapsed={this.state.collapsed} />
            <PageContent componentName={this.props.componentName}></PageContent>
            <PageFooter />
          </Layout>
        </Layout>
      </>
    );
  }
}

export default PageLayout;
