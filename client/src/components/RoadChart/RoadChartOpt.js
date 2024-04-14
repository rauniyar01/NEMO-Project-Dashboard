import React, { useState } from "react";
import Select from 'react-select';
import RoadNorChartEmit from "./RoadNorChartEmit";
import RoadMedChartEmit from "./RoadMedChartEmit";
import RoadHighChartEmit from "./RoadHighChartEmit";
import RoadMHEChart from "./RoadMHEChart";
import { PieChart } from "./Pie_Chart";
import { DoughnutChart } from "./Doughnut_Chart";

export default function RoadChartOpt() {
  const data = [
      {
          value: <RoadNorChartEmit/>,
          label: "Chart for Normal Emitters" 
      },
      {
          value: <RoadMedChartEmit/>,
          label: "Chart for Medium Emitters" 
      },
      {
          value: <RoadHighChartEmit/>,
          label: "Chart for High Emitters" 
      },
      {
        value: <RoadMHEChart/>,
        label: "Comparison" 
      },
      {
        value: <PieChart/>,
        label: "Pie Chart for Number of Emitters" 
      },
      {
        value: <DoughnutChart/>,
        label: "High Emitter Classification Based on Fuel Type" 
      }
  ];

  function getInitialState(data){
      data = <PieChart/>;
      return data; 
    }
  
  const [selectedValue, setSelectedValue] = useState(getInitialState);
  const handleChange = e => {
    setSelectedValue(e.value);
  }

  return (
        <div className="container">
            <Select
            placeholder="Select Option Chart for Classification"
            value={data.find(obj => obj.value === selectedValue)}
            options={data} // set list of the data
            onChange={handleChange} 
            /> 
            <div>
            <p> {selectedValue} </p>
            </div>
        </div>
    

    );
}