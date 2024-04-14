import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import HealthSensor from "./HealthSensor";
import { withRouter } from "react-router";

class Health extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>SENSORS - Health Information</h2> 
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={HealthSensor} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Health);