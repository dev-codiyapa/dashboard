import React from "react";
import { Row, PageHeader, Button } from "antd";
import "./Header.component.css";
import Search from "../search/Search.component";
import Profile from "../profile/Profile.component";
import { PlusCircleOutlined } from "@ant-design/icons";
import SubHeader from "./SubHeader.component";

class Header extends React.Component<any> {
  render() {
    return (
      <>
        <div className="page-header">
          <PageHeader
            ghost={false}
            title="CBSE: GRAD-5 Maths - Algebra"
            extra={[<Search />, <PlusCircleOutlined />, <Profile />]}
          />
          <div className="header-inner-first-section">
            <SubHeader />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
