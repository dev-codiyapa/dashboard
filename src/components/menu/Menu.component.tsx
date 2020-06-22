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
          <SubMenu key="sub1" icon={<BankOutlined />} title="Home">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<CopyOutlined />} title="Form">
            <Menu.Item key="5">Basic form</Menu.Item>
            <Menu.Item key="6">advance form</Menu.Item>
            <Menu.Item key="7">Login form</Menu.Item>
            <Menu.Item key="8">Register form</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Button">
            <Menu.Item key="9">option1</Menu.Item>
            <Menu.Item key="10">option2</Menu.Item>
            <Menu.Item key="11">option3</Menu.Item>
            <Menu.Item key="12">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default SieBarMenu;
