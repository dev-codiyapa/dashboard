import React from "react";
import "./Header.component.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

const PageHeader: React.FC<any> = (props: any) => {
  console.log("current props value===>hello", props.collapsed);
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: props.toggle
          }
        )}
      </Header>
    </>
  );
};

export default PageHeader;
