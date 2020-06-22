import React from "react";
import "./Header.component.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { Layout, Row, Col, Avatar } from "antd";
import Search from "../../components/search/Search.component";
import Profile from "../../components/profile/Profile.component";
import Profilenofitication from "../../components/notfication/Notification.component";

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
            <ul className="header-left-section">
              <li>
                <a className="trigger" onClick={props.toggle} href="#">
                  {props.collapsed ? (
                    <MenuUnfoldOutlined />
                  ) : (
                    <MenuFoldOutlined />
                  )}
                </a>
              </li>
              <li>
                <a href="/">
                  <Avatar size="small" icon={<HomeOutlined />} />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" span={12}>
            <ul className="header-right-section">
              <li>
                <Search />
              </li>
              <li>
                <Profilenofitication />
              </li>
              <li>
                <Profile />
              </li>
            </ul>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default PageHeader;
