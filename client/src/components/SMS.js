import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import SMSForm from "./SMSForm";
import { withRouter } from "react-router";

class Email extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <h2>SENDING SMS to HIGH EMITTER VEHICLES</h2> 
        <div className="container">
          <Switch>
            <Route exact path={`${match.path}`} component={SMSForm} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Email);