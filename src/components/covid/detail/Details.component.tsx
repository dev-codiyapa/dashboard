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
    this.state = {
      data: []
    };
    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
        width: "8.5%",
        ellipsis: true,
        editable: true,
        render: (text: any) => {
          return (
            <span>
              <strong>{text}</strong>
            </span>
          );
        }
      },
      {
        title: "Confirmed",
        dataIndex: "confirmed",
        width: "8.5%",
        ellipsis: true,
        editable: true,
        render: (text: any) => {
          return (
            <span className="text-danger">
              <strong>{text.toLocaleString("en-in")}</strong>
            </span>
          );
        }
      },
      {
        title: "Active",
        dataIndex: "active",
        editable: true,
        ellipsis: true,
        width: "12%",
        render: (text: any) => {
          return (
            <span className="text-info">
              <strong>{text.toLocaleString("en-in")}</strong>
            </span>
          );
        }
      },
      {
        title: "Recovered",
        dataIndex: "recovered",
        ellipsis: true,
        editable: true,
        width: "6%",
        render: (text: any) => {
          return (
            <span className="text-success">
              <strong>{text.toLocaleString("en-in")}</strong>
            </span>
          );
        }
      },
      {
        title: "Deceased",
        dataIndex: "deceased",
        ellipsis: true,
        editable: true,
        width: "6%",
        render: (text: any) => {
          return (
            <span className="text-warning">
              <strong>{text.toLocaleString("en-in")}</strong>
            </span>
          );
        }
      }
    ];
  }
  componentDidMount() {
    console.log("call API to get data state wise");
    fetch("https://covid19-india-adhikansh.herokuapp.com/states")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let responseData = data && data.state;
        let newData: Array<any> = [];
        for (let i = 0; i < responseData.length; i++) {
          let obj = {
            key: responseData[i] && responseData[i].id,
            name: responseData[i] && responseData[i].name,
            confirmed: responseData[i] && responseData[i].total,
            active: responseData[i] && responseData[i].active,
            recovered: responseData[i] && responseData[i].cured,
            deceased: responseData[i] && responseData[i].death
          };
          newData.push(obj);
        }
        this.setState({
          data: newData
        });
      })
      .catch(error => {
        console.log(
          "something went wrong while fetching state wise corona data"
        );
      });
  }
  render() {
    const components = {};
    let data = this.state.data;
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
