"use client";

import React, { useEffect, useState } from "react";

//import bg from "../../public/images/bg.png"
import Header from "../../components/Header";
import PointsInput from "../../components/points-input";
import { HiPlus } from "react-icons/hi";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InputPointsBox({
  numPoints,
  setNumPoints,
  inputs,
  setInputs,
  tempValue,
  setTempValue,
  handleCalculate,
  tempPolyDegree,
  setTempPolyDegree,
  value,
  setValue,
}) {
  function addPoints() {
    setNumPoints(numPoints + 1);
    setInputs([...inputs, { x: 0, y: 0 }]);
    console.log(inputs);
  }

  function handleDelete(index) {
    const temp = [...inputs];
    console.log(temp);
    temp.splice(index, 1);
    console.log(temp);
    setNumPoints(numPoints - 1);
    setInputs(temp);
  }

  function handleInputX(value, index) {
    inputs.map((input, z) => {
      if(input.x == value){
        toast.error(`All x values must be unique. ${value} has already been used on x at index ${z}. Please enter a different x value.`, {
          position: "bottom-left",
          theme: "colored"
        });
      }
    })

    const temp = [...inputs];
    temp[index].x = value;
    setInputs(temp);
  }

  function handleInputY(value, index) {
    const temp = [...inputs];
    temp[index].y = value;
    setInputs(temp);
  }

  return (
    <div className="border rounded-2xl border-black p-10 text-font flex flex-col items-center self-start">
      <div className="flex flex-row items-left w-full mb-3 ml-1">
        <Latex>$n$</Latex>
        <span className="mx-9">
          <Latex>$x$</Latex>
        </span>
        <span className="ml-32">
          <Latex>$f(x)$</Latex>
        </span>
      </div>
      {inputs.map((input, index) => {
        return (
          <PointsInput
            key={index}
            index={index}
            numPoints={numPoints}
            data={input}
            handleDelete={handleDelete}
            inputs={inputs}
            setInputs={setInputs}
            handleInputX={handleInputX}
            handleInputY={handleInputY}
          />
        );
      })}
      <div
        className="border rounded-full border-black p-1 max-w-max mb-6 hover:cursor-pointer mt-4"
        onClick={addPoints}
      >
        <div className="flex flex-row gap-2 justify-center items-center bg-red-100 hover:bg-red-200 rounded-full px-4 py-1 font-semibold">
          <HiPlus className="text-black" />
          <span className="text-black">Add Point</span>
        </div>
      </div>
      <div className="flex flex-col mb-2 justify-center">
        <label
          htmlFor="xValue"
          className="mr-2 text-font text-base text-center mb-1"
        >
          Value of <Latex>$x$</Latex>
        </label>
        <input
          type="number"
          className="w-36 bg-stone-100 rounded-xl py-1 px-4 text-font text-base h-7 mr-2"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          required
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <label
          htmlFor="xValue"
          className="mr-2 text-font text-base text-center mb-2 flex items-center justify-center"
        >
          Polynomial of Degree{" "}
          <span className="ml-1 text-xs">
            <Latex>$&#60;=$</Latex>
          </span>
        </label>
        <input
          type="number"
          className="w-36 bg-stone-100 rounded-xl py-1 px-4 text-font text-base h-7 mr-2"
          onChange={(e) => {
            if (e.target.value > numPoints - 1) {
              setTempPolyDegree(numPoints - 1);
            } else {
              setTempPolyDegree(e.target.value);
            }
          }}
          max={numPoints - 1}
          min={2}
          value={tempPolyDegree}
          required
        />
      </div>
      {/* <ToastContainer/> */}
    </div>
  );
}
export default InputPointsBox;
