"use client";

import React, { useEffect, useState } from "react";

//import bg from "../../public/images/bg.png"
import Header from "../../components/Header";
import InputPointsBox from "./points_input_box";
import FinalValue from "./final_value_box";
import Formula from "./formula";
import DivTable from "./div_table";
import GraphValue from "./graph_box";

export default function Calculator() {
    const [isHidden, setIsHidden] = useState(true);
    const [tempValue, setTempValue] = useState(0);
    const [tempPolyDegree, setTempPolyDegree] = useState(2);
    const [value, setValue] = useState(0);
    const [divTable, setDivTable] = useState([]);
    const [numPoints, setNumPoints] = useState(3);
    const [inputs, setInputs] = useState([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
  
    const handleCalculate = () => {
      // Perform calculation here if needed
      setIsHidden(false); // Show the hidden box
      setValue(tempValue);
    };
  
    return (
      <div className="flex flex-col p-10 w-full">
        <Header />
        <div className="flex pt-6 w-full">
          {/* LEFT SIDE */}
          <InputPointsBox
            numPoints={numPoints}
            setNumPoints={setNumPoints}
            inputs={inputs}
            setInputs={setInputs}
            tempValue={tempValue}
            setTempValue={setTempValue}
            handleCalculate={handleCalculate}
            tempPolyDegree={tempPolyDegree}
            setTempPolyDegree={setTempPolyDegree}
          />
  
          {/* RIGHT SIDE */}
          {/* {!isHidden && ( */}
            <div className="px-4 w-full">
              {/* DIVIDED DIFFERENCE TABLE */}
              <div className="flex flex-1 mb-4">
                <div className="w-full bg-white p-4 text-font rounded-lg drop-shadow-md">
                  <DivTable
                    numPoints={numPoints}
                    inputs={inputs}
                    setDivTable={setDivTable}
                  />
                </div>
              </div>
              {/* INTERPOLATION POLYNOMIAL */}
              <div className="w-full bg-white p-10 text-font rounded-lg mb-2 flex items-center flex-col">
                <Formula inputs={inputs} polyDegree={tempPolyDegree} value={value} />
              </div>
              <div className="flex mb-4">
                {/* FINAL VALUE */}
                <div className="w-auto px-8 bg-white rounded-lg drop-shadow-md flex justify-center hidden">
                  <FinalValue
                    value={value}
                    inputs={inputs}
                    polyDegree={tempPolyDegree}
                  />
                </div>
              </div>
              <div className="w-full bg-white p-10 text-font rounded-lg mb-2 flex items-center flex-col">
                <GraphValue/>
              </div>
            </div>
         {/* )} */} 
        </div>
      </div>
    );
}
