import React,{ Component }  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


const getroadNorEmitDataQuery = gql`
    {
            roadclassification(where: {datetime: {_gte: "2022-02-20 00:00:00", _lte: "2022-02-25 23:59:59"}, sound_classification: {_eq: "normal"}}, order_by: {datetime: desc}) {
              id,
              datetime,
              unece_vehicle_class,
              speed,
              lmax,
              sound_classification,
              vehicle_data: passby_data(path: "$.vRDBResult")
            }
    }
`;

const columns = [
    {
      Header: "Vehicle ID",
      accessor: "id"
    },
    {
      Header: "LMax Value",
      accessor: "lmax"
    },
    {
        Header: "Type of Fuel",
        accessor: "vehicle_data.typeOfFuel"
      },
      {
        Header: "Sound Classification",
        accessor: "sound_classification"
    },  
    {
        Header: "Vehicle Model",
        accessor: "vehicle_data.vehicleModel"
    },
    {
        Header: "Date & Time",
        accessor: "datetime"
    },
  ]

// {
    //    getNEMOData {
    //        NEMO_Mock_Data {
    //            vehicleid
    //            soundEmissionDriveBy
    //        }
    //    }
    //}


class roadNorEmitdataParameter extends Component {
    render() {
        let { data } = this.props;
        return (
          <div>
            <h2> Normal Emitter Vehicles </h2>
            <ReactTable
              data={ data.roadclassification}
              columns={columns}
              defaultPageSize={10}
            />
          </div>
        );
    }
}


export default graphql(getroadNorEmitDataQuery)(roadNorEmitdataParameter);