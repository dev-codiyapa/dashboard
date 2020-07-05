import React from "react";
import "./App.css";
import Home from "./pages/home/Home.component";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CovidDetailsReport from "./pages/details/Details.component";
import ContactUs from "./components/contact-us/ContactUs.component";
interface IAppState {
  width: number;
}
interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const width = this.state.width;
    const isSmallScreenWith = width <= 1335;
    return (
      <>
        {!isSmallScreenWith ? (
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/detailed_view">
                <CovidDetailsReport />
              </Route>
              <Route path="/contact_us">
                <ContactUs />
              </Route>
              <Route path="/others_view">
                <ContactUs />
              </Route>
            </Switch>
          </Router>
        ) : (
          <>
            <h2
              className="text-center text-info"
              style={{ marginTop: "300px" }}
            >
              {" "}
              Cureently, we are not supporting small screen devices.
            </h2>
            <h3 className="text-center text-warning">
              Please use desktop to view proper results.{" "}
            </h3>
          </>
        )}
      </>
    );
  }
}

export default App;
