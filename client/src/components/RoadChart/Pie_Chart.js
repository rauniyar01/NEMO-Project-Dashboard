import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-labels';



export const data = {
  labels: ['High Emitters', 'Medium Emitters', 'Normal Emitters'],
  //labels: ['High Emission Rating', 'Medium Emission Rating', 'Low Emission Rating','Normal Emission Rating',],
  datasets: [
    {
      label: '# of Emitters',
      data: [6755, 6280, 74833],
      //data: [1020, 1005, 2889, 1350],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(154, 162, 235, 1)',
        'rgba(255, 159, 64, 1)'
        //'rgba(255, 145, 155, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(154, 162, 235, 1)',
        'rgba(255, 159, 64, 1)'
        //'rgba(255, 145, 155, 1)',
      ],
      borderWidth: 1,
    },
  ]
};

const option = {
    plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'percentage',

        //render: 'value',
 
        // precision for percentage, default is 0
        precision: 1,

        fontColor: [
          'red',
          'red',
          'red',
          //'red',
        ],
 
        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: true,
 
        // font size, default is defaultFontSize
        fontSize: 35,
      }
    }
}

// const option = {
//   tooltips: {
//     callbacks: {
//       label: function(tooltipItem, data) {
//         var dataset = data.datasets[tooltipItem.datasetIndex];
//         var meta = dataset._meta[Object.keys(dataset._meta)[0]];
//         var total = meta.total;
//         var currentValue = dataset.data[tooltipItem.index];
//         var percentage = parseFloat((currentValue/total*100).toFixed(0));
//         return currentValue + ' (' + percentage + '%)';
//       },
//       title: function(tooltipItem, data) {
//         return data.labels[tooltipItem[0].index];
//       },
//     }
//   },
  
// }

export function PieChart() {
  return <Pie data={data}  options={option} width={70} height={425} options={{ maintainAspectRatio: false}}/>;
}