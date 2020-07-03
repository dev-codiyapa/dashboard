import React from "react";
import { ICovidTableViewProps, ICovidTableViewState } from "./interfaces";
import { Table } from "antd";

class CovidTableView extends React.Component<
  ICovidTableViewProps,
  ICovidTableViewState
> {
  columns: any;
  constructor(props: any) {
    super(props);
    this.state = {};
    this.columns = [
      {
        title: "TRRN",
        dataIndex: "trrn",
        width: "8.5%",
        ellipsis: true,
        editable: true
      },
      {
        title: "Client",
        dataIndex: "organization",
        editable: true,
        ellipsis: true,
        width: "12%"
      },
      {
        title: "Month",
        dataIndex: "wage_month",
        ellipsis: true,
        editable: true,
        width: "6%"
      }
    ];
  }
  componentDidMount() {
    console.log("call API to get data state wise");
  }
  render() {
    const components = {};
    let data = [{
      trrn:"12",
      key: 1
    }]
    return (
      <>
        <Table components={components} dataSource={data} columns={this.columns} />
      </>
    );
  }
}

export default CovidTableView;
