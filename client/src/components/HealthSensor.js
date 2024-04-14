import React,{Component}  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


const getsensorHealthQuery = gql`
    {
        health {
            sensor
            siteid
            state
            datetime
        }
    }
`;

const columns = [
    {
      Header: "Site ID",
      accessor: "siteid"
    },
    {
      Header: "Sensor Module",
      accessor: "sensor"
    },
    {
      Header: "State",
      accessor: "state"
    },
    {
        Header: "Date & Time",
        accessor: "datetime"
      }
  ]

// {
    //    getNEMOData {
    //        NEMO_Mock_Data {
    //            vehicleid
    //            soundEmissionDriveBy
    //        }
    //    }
    //}


class healthSensorParameter extends Component {
    render() {
        let { data } = this.props;
        return (
          <div>
            <h2> Health Data of Sensors </h2>
            <ReactTable
              data={ data.health }
              columns={columns}
              defaultPageSize={15}
            />
          </div>
        );
    }
}


export default graphql(getsensorHealthQuery)(healthSensorParameter);