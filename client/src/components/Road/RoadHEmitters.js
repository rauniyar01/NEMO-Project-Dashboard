import React,{ Component }  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
//import { useTable } from "react-table";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { CSVLink } from "react-csv";


const getroadHEDataQuery = gql`
    {
            roadclassification(where: {datetime: {_gte: "2022-02-20 00:00:00", _lte: "2022-02-25 23:59:59"}, site_id:{_eq: "Rotterdam"}, sound_classification: {_eq: "high"}}, order_by: {datetime: desc}) {
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


class roadHEdataParameter extends Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.state = {
      dataToDownload: [],
    };
  }

  download(event) {
    const currentRecords = this.reactTable.getResolvedState().sortedData;
    var data_to_download = [];
    for (var index = 0; index < currentRecords.length; index++) {
      let record_to_download = {};
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        record_to_download[columns[colIndex].Header] =
          currentRecords[index][columns[colIndex].accessor];
      }
      data_to_download.push(record_to_download);
    }
    this.setState({ dataToDownload: data_to_download }, () => {
      // click the CSVLink component to trigger the CSV download
      this.csvLink.link.click();
    });
  }

  render() {
    let { data } = this.props;
    return (
      <div>
        <div>
          <h2> High Emitter Vehicles </h2>
          <ReactTable
            ref={(r) => (this.reactTable = r)}
            data={data.roadclassification}
            columns={columns}
            defaultPageSize={10}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id])
                .toLowerCase()
                .includes(filter.value.toLowerCase())
            }
          />
        <div>
          <button onClick={this.download}>Download CSV File</button>
        </div>
        <div>
          <CSVLink
            data={this.state.dataToDownload}
            filename="High Emitter Vehicles.csv"
            className="hidden"
            ref={(r) => (this.csvLink = r)}
          />
        </div>  
        </div>
      </div>
    );
  }
}

// class roadHEdataParameter extends Component {
//     render() {
//         let { data } = this.props;
//         return (
//           <div>
//             <h2> High Emitter Vehicles </h2>
//             <ReactTable
//               data={ data.roadclassification }
//               columns={headers}
//               defaultPageSize={10}
//             />
//             <CSVLink data={ headers } filename={"High Emitter Vehicles.csv"}> Download CSV</CSVLink>
//           </div>     
//         );
//     }
// }


export default graphql(getroadHEDataQuery)(roadHEdataParameter);
