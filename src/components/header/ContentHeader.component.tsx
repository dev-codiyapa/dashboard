import React from "react";
import { IContentHeaderProps, IContentHeaderState } from "./interfaces";
import { Tabs } from "antd";
import Board from "../Board/Board.component";

const { TabPane } = Tabs;

const ContentHeader: React.FC<IContentHeaderProps &
  IContentHeaderState> = props => {
  const tabName = props.tabName;
  return (
    <>
      {tabName == "task" ? (
          <>
        <p>
          <Tabs defaultActiveKey="board">
            <TabPane tab="List" key="list"></TabPane>
            <TabPane tab="Demo" key="demo"></TabPane>
            <TabPane tab="Board" key="board">
              <Board />
            </TabPane>
            <TabPane tab="Calendar" key="calendar"></TabPane>
            <TabPane tab="Pmdt" key="Pmdt"></TabPane>
            <TabPane tab="Process" key="process"></TabPane>
          </Tabs>
        </p>
        </>
      ) : null}
    </>
  );
};

export default ContentHeader;
