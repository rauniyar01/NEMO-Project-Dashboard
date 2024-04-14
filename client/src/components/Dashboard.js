import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
import Master from "./Master";
import Pos from "./Pos";
import Health from "./Health";
import Email from "./Email";
import SMS from "./SMS";
import IndexDashboard from "./IndexDashboard";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.path}`}>NEMO</Link>
          </li>
          <li>
            <Link to={`${match.path}/road`}>Vehilcle Dashboard</Link>
          </li>
          <li>
            <Link to={`${match.path}/railway`}>Railway Dashboard</Link>
          </li>
          <li>
            <Link to={`${match.path}/health`}>Sensors Health Info</Link>
          </li>
          <li>
            <Link to={`${match.path}/email`}>Send Email</Link>
          </li>
          <li>
            <Link to={`${match.path}/sms`}>Send SMS</Link>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
            <Switch>
              <Route path={`${match.path}/Road`}>
                <Master />
              </Route>
              <Route path={`${match.path}/Railway`}>
                <Pos />
              </Route>
              <Route path={`${match.path}/Health`}>
                <Health />
              </Route>
              <Route path={`${match.path}/Email`}>
                <Email />
              </Route>
              <Route path={`${match.path}/SMS`}>
                <SMS />
              </Route>
              <Route exact path={`${match.path}`}>
                <IndexDashboard />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Dashboard);
