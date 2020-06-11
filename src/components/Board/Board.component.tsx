import React from "react";
import { Row, Col, Card, Avatar, Badge } from "antd";
import { IBoardProps, IBoardState } from "./interfaces";
import "./Board.component.css";
import {
  EllipsisOutlined,
  MoreOutlined,
  UserOutlined
} from "@ant-design/icons";

class Board extends React.Component<IBoardProps, IBoardState> {
  render() {
    return (
      <>
        <div className="board-container">
          <Row>
            <Col span={22} offset={1}>
              <Row gutter={20}>
                <Col className="gutter-row" span={8}>
                  <div className="board-column">
                    <div className="on-track">
                      <p>
                        on Track{" "}
                        <span className="float-right">
                          <EllipsisOutlined />
                        </span>
                      </p>
                    </div>
                    <Card bordered={false} className="card">
                      <div className="on-track">
                        <p>
                          CBSE Grade 5 Maths: Algebra{" "}
                          <span className="float-right">
                            <MoreOutlined />
                          </span>
                        </p>
                      </div>
                      <div className="on-track">
                        <p>
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                          />
                          <Avatar
                            style={{
                              backgroundColor: "#87d068",
                              marginLeft: "5px"
                            }}
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                          />
                          <span className="float-right">
                            <Badge
                              count={25}
                              style={{ background: "#52c41a" }}
                            />
                          </span>
                        </p>
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="board-column">
                    <div className="delayed">
                      <p>
                        Delayed{" "}
                        <span className="float-right">
                          <EllipsisOutlined />
                        </span>
                      </p>
                    </div>
                    <Card bordered={false} className="card">
                      <div className="on-track">
                        <p>
                          CBSE Grade 5 Maths: Algebra{" "}
                          <span className="float-right">
                            <MoreOutlined />
                          </span>
                        </p>
                      </div>
                      <div className="on-track">
                        <p>
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                          />
                          <Avatar
                            style={{
                              backgroundColor: "#87d068",
                              marginLeft: "5px"
                            }}
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                          />
                          <span className="float-right">
                            <Badge
                              count={25}
                              style={{ background: "#52c41a" }}
                            />
                          </span>
                        </p>
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="board-column">
                    <div className="on-hold">
                      <p>
                        on Hold{" "}
                        <span className="float-right">
                          <EllipsisOutlined />
                        </span>
                      </p>
                    </div>
                    <Card bordered={false} className="card">
                      <div className="on-track">
                        <p>
                          CBSE Grade 5 Maths: Algebra{" "}
                          <span className="float-right">
                            <MoreOutlined />
                          </span>
                        </p>
                      </div>
                      <div className="on-track">
                        <p>
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                          />
                          <Avatar
                            style={{
                              backgroundColor: "#87d068",
                              marginLeft: "5px"
                            }}
                            shape="square"
                            size="small"
                            icon={<UserOutlined />}
                          />
                          <span className="float-right">
                            <Badge
                              count={25}
                              style={{ background: "#52c41a" }}
                            />
                          </span>
                        </p>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Board;
