import React, { useState } from "react";
import Select from 'react-select';
import RoadNorEmit from "./RoadNorEmit";
import RoadMHEmitters from "./RoadMHEmitters";
import RoadHEmitters from "./RoadHEmitters";
import RoadHEmittersTees from "./RoadHEmittersTees";
import RoadMHEmittersSite from "./RoadMHEmittersSite";

export default function RoadEmitOpt() {
  const data = [
      {
          value: <RoadNorEmit/>,
          label: "Normal Emitters" 
      },
      {
          value: <RoadMHEmitters/>,
          label: "Medium-High Emitters" 
      },
      {
          value: <RoadHEmitters/>,
          label: "High Emitters" 
      },
      {
        value: <RoadHEmittersTees/>,
        label: "Teesdorf Test" 
      },
      {
        value: <RoadMHEmittersSite/>,
        label: "Classification Based on Site ID" 
      }
  ];

  function getInitialState(data){
    data = <RoadHEmitters/>;
    return data; 
  }
  
  const [selectedValue, setSelectedValue] = useState(getInitialState);
  const handleChange = e => {
    setSelectedValue(e.value);
  }

  return (
        <div className="container">
            <Select
            placeholder="Select Option for Classification"
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