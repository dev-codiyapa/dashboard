import React from "react";
import "./Header.component.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

class PageHeader extends React.Component<any> {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: this.toggle
            }
          )}
        </Header>
      </>
    );
  }
}

export default PageHeader;
