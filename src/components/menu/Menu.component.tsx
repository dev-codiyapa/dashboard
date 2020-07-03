import React from "react";
import { Menu, Layout } from "antd";
import {
  SnippetsOutlined,
  TableOutlined,
  PhoneOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "./Menu.component.css";
import { Link } from "react-router-dom";

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
          {!this.props.collapsed ? (
            <>
              <span></span>
              <img
                src={require("../../static/images/virus.svg")}
                width="20px"
                style={{ float: "left" }}
              />{" "}
              <span>Covid-19 Dashboard</span>{" "}
            </>
          ) : (
            <img src={require("../../static/images/virus.svg")} width="25px" />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ marginTop: "20px" }}
        >
          <Menu.Item key="1" icon={<SnippetsOutlined />} title="Summary">
            <Link to="/">Summary</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TableOutlined />} title="Deatils">
            <Link to="detailed_view">Detailed view</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />} title="others">
            <Link to="others_view">Others info</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PhoneOutlined />} title="contactUs">
            <Link to="contact_us">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default SieBarMenu;
