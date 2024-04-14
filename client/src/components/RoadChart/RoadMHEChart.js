import React from 'react';
import { gql } from 'apollo-boost';
import graphql2chartjs from 'graphql2chartjs';
import { Query } from 'react-apollo';
//import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';



const query = `
  query Emitters {
    LMaxHighEmitters: roadclassification(where: {datetime: {_gte: "2022-02-22 00:00:00", _lte: "2022-02-25 23:59:59"}, sound_classification: {_eq: "high"}, speed:{}}, order_by: {speed: desc}) {
      label: speed
      data: lmax
    }
    LMaxMediumEmitters: roadclassification(where: {datetime: {_gte: "2022-02-22 00:00:00", _lte: "2022-02-25 23:59:59"}, sound_classification: {_eq: "medium"}, speed:{}}, order_by: {speed: desc}) {
      label: speed
      data: lmax
    }
    LMaxNorEmitters: roadclassification(where: {datetime: {_gte: "2022-02-22 00:00:00", _lte: "2022-02-25 23:59:59"}, sound_classification: {_eq: "normal"}, speed:{}}, order_by: {speed: desc}) {
      label: speed
      data: lmax
    }
  }
`;

/* const query = `
  query HighEmitters {
    LMaxHighEmitters: roadclassification(where: {datetime: {_gte: "2021-10-10 00:00:00", _lte: "2021-10-10 23:59:59"}, sound_classification: {_eq: "high"}}, order_by: {datetime: desc}) {
      label: sound_classification
      data: lmax
    }
  }
`; */



const Chart = ({ query }) => (
  <Query
    query={gql`
      ${query}
    `}
  >
    {({ data, error, loading }) => {
      if (loading || error) {
        if (error) console.error(error);
        return <div className="loadingIndicator">Please wait </div>;
      }
      
      // create graphql2chartjs instance
      const g2c = new graphql2chartjs();
      //const g2c = new graphql2chartjs();
      // add graphql data to graphql2chartjs instance
      g2c.add(data, (datasetName, dataPoint) => {
        if (datasetName === 'LMaxNorEmitters') { 
          return {
              chartType: 'line',
              fill:false,
              lineTension: 0,
              backgroundColor: 'green',
              borderColor: 'green',
              scaleShowVerticalLines: true,
              borderWidth: 0,
              //order: 1
          }
        }
        if (datasetName === 'LMaxMediumEmitters') {
          return {
              chartType: 'line',
              fill:false,
              lineTension: 0,
              backgroundColor: 'blue',
              borderColor: 'blue',
              scaleShowVerticalLines: true,
              borderWidth: 0,
              //order: 2
          } 
        } 
        if (datasetName === 'LMaxHighEmitters') {
          return {
              chartType: 'line',
              fill: false,
              lineTension: 0,
              backgroundColor: 'red',
              borderColor: 'red',
              scaleShowVerticalLines: true,
              borderWidth: 0,
              //order: 3
          }  
        }
      });
      
      
      // render chart with g2c data :)
      return <Line data={g2c.data}
      options={{
        title:{
          display:true,
          text:'Comparison of Normal-Medium-High Emitter - Vehicles',
          fontSize:20
        },
        scaleShowValues: true,
        showLines: false,
        scales:{
          xAxes:[{
            autoSkip: true,
            display: true,
            ticks: {
              beginAtZero: false,
            }
          }],
          yAxes: [{
            ticks: {
                beginAtZero: false
            }
          }]
        },
        legend:{
          display:true,
          position:'top',
        },
      }}/>;
    }}
  </Query>
);

const RoadMHEChart = ({ path }) => {

  return (
    <div style={{ margin: "10px", paddingTop: "65px" }}>
      <div key="line">
          <div className="chartWrapper">
              <Chart query={query} />
          </div>
      </div>
    </div>
  );
};
export default RoadMHEChart;
