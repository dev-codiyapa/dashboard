import React, { Component } from "react";
import { IHomeprops, IHomestate } from "./interfaces";
import SieBarMenu from "../../components/menu/Menu.component";
import { Layout } from "antd";
import PageHeader from "../../components/header/Header.component";

const { Content } = Layout;
class Home extends Component<IHomeprops, IHomestate> {
  render() {
    return (
      <>
        <Layout>
          <SieBarMenu />
          <Layout className="site-layout">
            <PageHeader />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default Home;
