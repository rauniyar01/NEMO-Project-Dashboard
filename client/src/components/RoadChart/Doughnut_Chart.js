import React from 'react';
import { Doughnut } from 'react-chartjs-2';


export const data = {
  labels: ['CNG', 'Diesel', 'Hybrid', 'LPG', 'Petrol'],
  datasets: [
    {
      label: '# of Emitters',
      data: [8, 2364, 396, 32, 3478],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const option = {
  plugins: {
    labels: {
      // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
      render: 'percentage',

      //render: 'value',

      // precision for percentage, default is 0
      precision: 1,

      // identifies whether or not labels of value 0 are displayed, default is false
      showZero: true,

      fontColor: 'green',


      // font size, default is defaultFontSize
      fontSize: 20,
    }
  }
}

export function DoughnutChart() {
  return <Doughnut data={data} options={option} width={70} height={425} options={{ maintainAspectRatio: false}}/>;
}