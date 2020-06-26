import React from "react";
import { ICovidTableViewProps, ICovidTableViewState } from "./interfaces";

class CovidTableView extends React.Component<
  ICovidTableViewProps,
  ICovidTableViewState
> {
  componentDidMount() {
    console.log("call API to get data state wise");
  }
  render() {
    return <>covid cases</>;
  }
}

export default CovidTableView;
