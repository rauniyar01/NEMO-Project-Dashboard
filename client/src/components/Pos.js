import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import RailData from "./RailData";
import TrainChartOpt from "./Train/TrainChartOpt";
import { withRouter } from "react-router";

class Pos extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>Vehicle - Railway Data Visualization</h2> 
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={RailData} />
          </Switch>
        </div>
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={TrainChartOpt} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Pos);