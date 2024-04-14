import React,{Component}  from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { CSVLink } from "react-csv";


const getrailwayDataQuery = gql`
    {
      railpassby(where: {datetime: {_gte: "2021-12-01 09:00:00", _lte: "2021-12-13 12:00:00"}}, order_by: {datetime: desc}) {
        id,
        datetime,
        siteid,
        category,
        emissionrating,
        data
      }
    }
`;

const columns = [
    {
      Header: "Train Site",
      accessor: "data.siteId"
    },
    {
      Header: "LA EQ Value",
      accessor: "data.soundSensor.lAeq"
    },
    {
        Header: "Train Speed Sensor Value",
        accessor: "data.speedSensor.speed"
    },
    {
        Header: "Emission Rating",
        accessor: "emissionrating"

    },
    {
        Header: "Train Type",
        accessor: "data.trainSensor.category"
    },  
    {
        Header: "Wagon Type",
        accessor: "data.wagonSensor.wagonType"
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

    class raildataParameter extends Component {
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
              <h2> Train Data </h2>
              <ReactTable
                ref={(r) => (this.reactTable = r)}
                data={data.railpassby}
                columns={columns}
                defaultPageSize={10}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id])
                    .toLowerCase()
                    .includes(filter.value.toLowerCase())
                }
              />
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <button onClick={this.download}>Download CSV File</button>
          </div>
            <div>
              <CSVLink
                data={this.state.dataToDownload}
                filename="Train Data.csv"
                className="hidden"
                ref={(r) => (this.csvLink = r)}
              />
            </div>  
            </div>
          </div>
        );
      }
    }



// class raildataParameter extends Component {
//     render() {
//         let { data } = this.props;
//         return (
//           <div>
//             <h2> Railway Data </h2>
//             <ReactTable
//               data={ data.railpassby }
//               columns={columns}
//               defaultPageSize={10}
//             />
//           </div>
//         );
//     }
// }


export default graphql(getrailwayDataQuery)(raildataParameter);