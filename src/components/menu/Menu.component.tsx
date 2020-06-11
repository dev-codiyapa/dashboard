import React from "react";
import { Menu } from "antd";
import {
  DesktopOutlined,
  ContainerOutlined,
  BankOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Menu.component.css";

const SieBarMenu: React.FC<any> = () => {
  return (
    <>
      <div>
        <a>
          <img
            src={require("../../static/images/logo.png")}
            alt="logo"
            className="logo"
          />
        </a>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={true}
          className="side-bar-menu"
        >
          <Menu.Item key="1" icon={<BankOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default SieBarMenu;
