import React from "react";
import { Tabs, Row, Col } from "antd";
import ContentHeader from "./ContentHeader.component";
const { TabPane } = Tabs;

const SubHeader: React.FC<any> = () => {
  return (
    <>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Task" key="task">
            <Row>
              <Col span={24}>
                <ContentHeader tabName="task" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Conversation" key="conversation"></TabPane>
          <TabPane tab="Files" key="files"></TabPane>
          <TabPane tab="Resources" key="resources"></TabPane>
          <TabPane tab="Status" key="status"></TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default SubHeader;
