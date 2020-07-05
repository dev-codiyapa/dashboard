import React from "react";
import { ICovidTableViewProps, ICovidTableViewState } from "./interfaces";
import { Table } from "antd";
import "./Details.component.css";

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
        title: "Confirmed",
        dataIndex: "confirmed",
        width: "8.5%",
        ellipsis: true,
        editable: true
      },
      {
        title: "Active",
        dataIndex: "active",
        editable: true,
        ellipsis: true,
        width: "12%"
      },
      {
        title: "Recovered",
        dataIndex: "recovered",
        ellipsis: true,
        editable: true,
        width: "6%"
      },
      {
        title: "Deceased",
        dataIndex: "deceased",
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
    let data = [
      {
        confirmed: "12",
        active: "12",
        recovered: "12",
        deceased: "12",
        key: 1
      },
      {
        confirmed: "12",
        active: "12",
        recovered: "12",
        deceased: "12",
        key: 1
      },
      {
        confirmed: "12",
        active: "12",
        recovered: "12",
        deceased: "12",
        key: 1
      },
      {
        confirmed: "12",
        active: "12",
        recovered: "12",
        deceased: "12",
        key: 1
      }
    ];
    return (
      <>
        <Table
          components={components}
          dataSource={data}
          columns={this.columns}
          className="pf-editable-table"
          bordered
        />
      </>
    );
  }
}

export default CovidTableView;
