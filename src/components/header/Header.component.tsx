import React from "react";
import "./Header.component.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
import Search from "../../components/search/Search.component";
import Profile from "../../components/profile/Profile.component";

const { Header } = Layout;

const PageHeader: React.FC<any> = (props: any) => {
  return (
    <>
      <Header
        className="site-layout-background page-header"
        style={{ padding: 0 }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <Col className="gutter-row" span={6}>
              <a className="trigger" onClick={props.toggle} href="#">
                {props.collapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined />
                )}
              </a>
            </Col>
          </Col>
          <Col className="gutter-row" span={12}>
            <ul className="header-right-section">
              <li>
                <Search />
              </li>
              <li><Profile /></li>
            </ul>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default PageHeader;
