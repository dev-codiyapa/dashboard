import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Col } from "antd";
import { ISummaryChartProps } from "./interfaces";

const SummaryChart: React.FC<ISummaryChartProps> = props => {
  let [summaryData, setSummaryData]: Array<any> = useState([]);

  const getSummaryDataForGraph = (data: any) => {
    let name: string | number = "0";
    let caseData = [];
    for (var i = 0; i < data.length; i++) {
      const corfirmed = data[i] && data[i].Confirmed;
      const recovered = data[i] && data[i].Recovered;
      const active = data[i] && data[i].Active;
      const deaths = data[i] && data[i].Deaths;
      name += "data";
      name = Number(name) + 1;
      let newData: { [PropName: string]: any } = {
        name: name,
        corfirmed: corfirmed,
        recovered: recovered,
        active: active,
        deaths: deaths
      };
      caseData.push(newData);
    }
    setSummaryData(caseData);
  };

  //-alternative of componentdidmount in functional component
  useEffect(() => {
    fetch(`https://api.covid19api.com/country/india`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("prepared data for display =====>", data);
        getSummaryDataForGraph(data);
      })
      .catch(error => {
        console.log("something went wrong while fetching API");
      });
  }, []);

  return (
    <>
      {summaryData && summaryData.length ? (
        <>
          <Col className="gutter-row" span={6}>
            <div className="summary-chart-box">
              <p className="summary-chart-box-title text-danger">Confirmed</p>
              <LineChart width={300} height={100} data={summaryData}>
                <Line
                  type="monotone"
                  dataKey="corfirmed"
                  stroke="#cf1322"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="summary-chart-box">
              <p className="summary-chart-box-title text-primary">Active</p>
              <LineChart width={300} height={100} data={summaryData}>
                <Line
                  type="monotone"
                  dataKey="deaths"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div className="summary-chart-box">
              <p className="summary-chart-box-title text-success">Recovered</p>
              <LineChart width={300} height={100} data={summaryData}>
                <Line
                  type="monotone"
                  dataKey="active"
                  stroke="#7cb305"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="summary-chart-box">
              <p className="summary-chart-box-title text-warning">Deceased</p>
              <LineChart width={300} height={100} data={summaryData}>
                <Line
                  type="monotone"
                  dataKey="recovered"
                  stroke="#faad14"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </Col>
        </>
      ) : null}
    </>
  );
};

export default SummaryChart;
