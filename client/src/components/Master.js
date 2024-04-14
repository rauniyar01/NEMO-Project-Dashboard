import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
//import RoadData from "./RoadData";
//import RoadMHEmitters from "./RoadMHEmitters";
import RoadEmitOpt from "./Road/RoadEmitOpt";
import RoadChartOpt from "./RoadChart/RoadChartOpt";
import { withRouter } from "react-router";

class Master extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>Vehicle - Road Data Visualization</h2> 
        {/* <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={RoadData} />
          </Switch>
        </div> */}
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={RoadEmitOpt} />
          </Switch>
        </div>
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={RoadChartOpt} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Master);
