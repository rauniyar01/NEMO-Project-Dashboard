import React from 'react';
import { gql } from 'apollo-boost';
import graphql2chartjs from 'graphql2chartjs';
import { Query } from 'react-apollo';
//import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const query = `
  query Emitters {
    LMaxNorEmitters: roadclassification(where: {datetime: {_gte: "2022-01-01 00:00:00", _lte: "2022-02-21 23:59:59"}, sound_classification: {_eq: "normal"}, speed:{}}, order_by: {speed: desc}) {
      label: speed,
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
        /* if (datasetName === 'LMaxMediumEmitters') {
          return {
              chartType: 'bar',
              backgroundColor: 'blue',
              order: 2
          } 
        } else if (datasetName === 'LMaxHighEmitters') { 
          return {
              chartType: 'bar',
              backgroundColor: 'red',
              order: 1
          }
        } */
        return {
          chartType: 'line',
          backgroundColor: 'green',
          order: 1
        }  
      });
      
      
      // render chart with g2c data :)
      return <Line data={g2c.data}
      options={{
        title:{
          display:true,
          text:'LMax Value of Normal Emitter - Vehicles',
          fontSize:20
        },
        showLines: false,
        scales:{
          xAxes:[{
            display: true,
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

const RoadNorChartEmit = ({ path }) => {

  return (
    <div style={{ margin: "10px", paddingTop: "65px" }}>
      <div key="bar">
          <div className="chartWrapper">
              <Chart query={query} />
          </div>
      </div>
    </div>
  );
};
export default RoadNorChartEmit;
