import React from "react";
import { Menu, Layout } from "antd";
import { UserOutlined, BankOutlined, CopyOutlined } from "@ant-design/icons";
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
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        className="sidebar"
      >
        <div className="logo">
          {!this.props.collapsed ? <p>Covid-19 Dashboard</p> : null}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ marginTop: "20px" }}
        >
          <Menu.Item key="1" icon={<BankOutlined />} title="Home">
            Summary
          </Menu.Item>
          <Menu.Item key="2" icon={<BankOutlined />} title="Home">
            Detailed view
          </Menu.Item>
          <Menu.Item key="3" icon={<BankOutlined />} title="Home">
            Others info
          </Menu.Item>
          <Menu.Item key="4" icon={<BankOutlined />} title="Home">
            News
          </Menu.Item>
          <Menu.Item key="4" icon={<BankOutlined />} title="Home">
            Contact Us
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default SieBarMenu;
