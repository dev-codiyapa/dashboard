import React from "react";
import CovidTableView from "../../components/covid/detail/Details.component";
import { ICovidDetailsReportProps } from "./interfaces";
import PageLayout from "../../Layout/Layout.component";

const CovidDetailsReport: React.FC<ICovidDetailsReportProps> = (props: any) => {
  return <PageLayout componentName={<CovidTableView />} />;
};

export default CovidDetailsReport;
