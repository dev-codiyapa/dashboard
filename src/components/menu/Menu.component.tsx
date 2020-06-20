import React from "react";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import "./Menu.component.css";

const {Sider} = Layout;

class SieBarMenu extends React.Component<any> {
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
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default SieBarMenu;
