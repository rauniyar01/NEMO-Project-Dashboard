import React,{Component}  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


const getroadDataQuery = gql`
    {
        roadpassby
        {
              data
        }
    }
`;

const columns = [
    {
      Header: "Road Paasby Site",
      accessor: "data.siteId"
    },
    {
      Header: "Vehicle ID",
      accessor: "data.vehicleId"
    },
    {
      Header: "CO2 Emission Value",
      accessor: "data.vRDBResult.co2Emission"
    },
    {
        Header: "Sound Emission Driveby Value",
        accessor: "data.vRDBResult.soundEmissionDriveBy"
      },
      {
        Header: "Exhaust Sensor nOCO2",
        accessor: "data.exhaustSensor.nOCO2"
    },  
    {
        Header: "Licence Plate",
        accessor: "data.vRDBResult.authorityLicensePlateNumber"
    },
    {
        Header: "Date & Time",
        accessor: "data.dateTime"
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


class roaddataParameter extends Component {
    render() {
        let { data } = this.props;
        return (
          <div>
            <h2> Passby Road Data </h2>
            <ReactTable
              data={ data.roadpassby}
              columns={columns}
              defaultPageSize={10}
            />
          </div>
        );
    }
}


export default graphql(getroadDataQuery)(roaddataParameter);