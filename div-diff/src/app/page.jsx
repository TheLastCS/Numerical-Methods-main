"use client";

import React, { useEffect, useState } from "react";

//import bg from "../../public/images/bg.png"
import Header from "../components/Header";
import InputPointsBox from "./boxes/points_input_box";
import FinalValue from "./boxes/final_value_box";
import Formula from "./boxes/formula";
import DivTable from "./boxes/div_table";
import GraphValue from "./boxes/graph_box";
import Link from "next/link";
import Latex from "react-latex-next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    // setIsHidden(false); // Show the hidden box
    setValue(tempValue);
  };

  useEffect(() => {
    console.log(numPoints);
  });

  return (
    <div className="flex flex-col px-16 py-8 w-full">
      <div className="flex flex-row justify-between items-end">
        <span className="text-3xl font-bold">Divided Differences Calculator</span>
        <div className="border rounded-2xl border-black px-4 py-2 flex font-medium text-xl max-w-min gap-x-8">
          <Link
            href="/Concept"
            className="hover:bg-green-100 hover:cursor-pointer px-4 py-2 rounded-xl"
          >
            Concept
          </Link>
          <div className="underline px-4 py-2 hover:cursor-pointer rounded-xl bg-blue-100 underline-offset-4">
            Calculator
          </div>
          <Link 
            href="/Members"
            className="hover:bg-red-100 px-4 py-2 hover:cursor-pointer rounded-xl"
          >
            Members
          </Link>
        </div>
      </div>
      <div className="flex pt-6 w-full gap-x-6">
        {/* LEFT SIDE */}
        <InputPointsBox
          numPoints={numPoints}
          setNumPoints={setNumPoints}
          inputs={inputs}
          setInputs={setInputs}
          tempValue={tempValue}
          value={value}
          setValue={setValue}
          setTempValue={setTempValue}
          handleCalculate={handleCalculate}
          tempPolyDegree={tempPolyDegree}
          setTempPolyDegree={setTempPolyDegree}
        />

        {/* RIGHT SIDE */}
        {/* {!isHidden && ( */}
        <div className="pl-4 w-full flex flex-col gap-y-8">
          {/* DIVIDED DIFFERENCE TABLE */}
          <div className="border rounded-2xl border-black p-5">
            <div className="w-full bg-white p-4 text-font rounded-lg">
              <DivTable
                numPoints={numPoints}
                inputs={inputs}
                setDivTable={setDivTable}
              />
            </div>
          </div>
          {/* INTERPOLATION POLYNOMIAL */}
          <div className="border rounded-2xl border-black p-5 flex items-center flex-col">
            <Formula
              inputs={inputs}
              polyDegree={tempPolyDegree}
              value={value}
            />
          </div>
          {/* <div className="flex">
            <div className="w-auto px-8 bg-white rounded-lg drop-shadow-md flex justify-center hidden">
              <FinalValue
                value={value}
                inputs={inputs}
                polyDegree={tempPolyDegree}
              />
            </div>
          </div> */}
          <div className="w-full bg-white p-5 text-font rounded-2xl flex items-center flex-col border border-black">
            <GraphValue
              value={value}
              inputs={inputs}
              polyDegree={tempPolyDegree}
            />
          </div>
        </div>
        {/* )} */}
      </div>
      <ToastContainer />
    </div>
  );
}
