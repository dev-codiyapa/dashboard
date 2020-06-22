import React from "react";
import { convertUTCDateToLocalDate } from "../../../utils/timeZoneCOnversion";
import { Row, Col, Card } from "antd";
import "./Summary.component.css";

const style = { background: "#0092ff", padding: "8px 0" };

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
          <Col className="gutter-row" span={6}>
            <div className="confirm-case-box">
              <Card>
                <p className="title text-danger">Confirmed</p>
                <p>
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
                <p>
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
                <p>
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
                <p className="title text-warning">Death</p>
                <p>
                  {updatedResult &&
                    updatedResult.deaths &&
                    updatedResult.deaths.toLocaleString("en-in")}
                </p>
              </Card>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default Summary;
