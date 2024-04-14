import React, { Component, Fragment } from "react";

class IndexDashboard extends Component {
  render() {
    return (
      <Fragment>
        <h2>Welcome to NEMO</h2>
        <div>
        <center>
        <h1>Noise and Emissions Monitoring and Radical Mitigation</h1>
          <br />
          <strong>
            <a style={{ textDecoration: 'none', textAlign: 'center' }} href="https://nemo-cities.eu/"> 
            NEMO is creating and testing a completely new remote sensing technology that can measure noise and emissions from individual road vehicles and trains in real time, along with the multispectral camera technology to measure emissions from cruise ships. 
            <br />The system grants the possibility to limit access to vulnerable areas or have a variable charging system installed on the basis of actual environmental impacts. 
            
            </a>
          </strong>
        </center>
      </div>
      </Fragment>
      
    );
  }
}

export default IndexDashboard;
