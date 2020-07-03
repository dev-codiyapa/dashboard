import React from "react";
import { IPageContentProps } from "./interfaces";
import { Layout } from "antd";

const { Content } = Layout;

const PageContent: React.FC<IPageContentProps> = (props: any) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280
      }}
    >
      {props.componentName}
    </Content>
  );
};
export default PageContent;
