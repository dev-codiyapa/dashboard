import React, { Component } from "react";
import { IHomeprops, IHomestate } from "./interfaces";
import Header from "../../components/header/Header.component";
import Menu1 from "../../components/menu/Menu.component";
import { Row, Col } from "antd";

class Home extends Component<IHomeprops, IHomestate> {
  render() {
    return (
      <>
        {" "}
        <Row>
          <Col span={2}>
            <Menu1 />
          </Col>
          <Col span={22}>
            <Header />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
