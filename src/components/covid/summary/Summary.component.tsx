import React from "react";
import { convertUTCDateToLocalDate } from "../../../utils/timeZoneCOnversion";
import { Row, Col, Card, Alert } from "antd";
import "./Summary.component.css";
import SummaryChart from "../../covid/summary/SummaryChart.component";

class Summary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    let date = convertUTCDateToLocalDate(new Date());
    let requiredDate = date.toISOString();
    fetch(
      `https://api.covid19api.com/country/india?from=${requiredDate}&to=${requiredDate}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data
        });
      })
      .catch(error => {
        console.log("something went wrong while fetching API");
      });
  }

  getSummaryData() {
    const totalResult = this.state.data;
    const totalNumberOfUpdateCovidResult = totalResult && totalResult.length;
    let updateCovidResult =
      totalNumberOfUpdateCovidResult &&
      totalResult[totalNumberOfUpdateCovidResult - 1];
    const confirmed = updateCovidResult && updateCovidResult.Confirmed;
    const recovered = updateCovidResult && updateCovidResult.Recovered;
    const active = updateCovidResult && updateCovidResult.Active;
    const deaths = updateCovidResult && updateCovidResult.Deaths;
    return {
      confirmed: confirmed,
      Recovered: recovered,
      active: active,
      deaths: deaths
    };
  }

  render() {
    let updatedResult = this.getSummaryData();
    return (
      <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Alert
              message="If you have had COVID, and if you would like to share your story please write at survivor@covidindia.org. "
              type="success"
              showIcon
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="confirm-case-box">
              <Card>
                <p className="title text-danger">Confirmed</p>
                <p className="text-danger text-num">
                  {updatedResult &&
                    updatedResult.confirmed &&
                    updatedResult.confirmed.toLocaleString("en-in")}
                </p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="active-case-box">
              <Card>
                <p className="title text-primary">Active</p>
                <p className="text-primary text-num">
                  {updatedResult &&
                    updatedResult.active &&
                    updatedResult.active.toLocaleString("en-in")}
                </p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="recovered-case-box">
              <Card>
                <p className="title text-success">Recovered</p>
                <p className="text-success text-num">
                  {updatedResult &&
                    updatedResult.Recovered &&
                    updatedResult.Recovered.toLocaleString("en-in")}
                </p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="death-case-box">
              <Card>
                <p className="title text-warning">Deceased</p>
                <p className="text-warning text-num">
                  {updatedResult &&
                    updatedResult.deaths &&
                    updatedResult.deaths.toLocaleString("en-in")}
                </p>
              </Card>
            </div>
          </Col>
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginTop: "80px" }}
        >
          <SummaryChart />
        </Row>
      </>
    );
  }
}
export default Summary;
