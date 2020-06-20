import React from "react";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import "./Menu.component.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

class SieBarMenu extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("current props values", this.props.collapsed);
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 2">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 3">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default SieBarMenu;
