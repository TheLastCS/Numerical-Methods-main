"use client";

import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

function interpolatePolynomial(x, points) {
  const keys = Object.keys(points);
  const n = keys.length;
  let result = 0;

  
  for (let i = 0; i < n; i++) {
    let term = points[keys[i]].y; 

    
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        term *=
          (x - points[keys[j]].x) / (points[keys[i]].x - points[keys[j]].x);
      }
    }

    result += term; 
  }
  //console.log("formula result", result)
  return result;
}


function FinalValue({ value, inputs, polyDegree }) {

  const keys = Object.keys(inputs);
  //console.log("keys:",keys)
  polyDegree = parseInt(polyDegree)
  
  const sliced = Object.keys(inputs).slice(0, polyDegree+1).reduce((result, key) => {
    result[key] = inputs[key];

    return result;
}, {});

  const result = interpolatePolynomial(value,sliced)
  //console.log("value",value)

  return (
    <>
      <div className="flex items-center p-4">
        <div className="text-base text-font">
          <Latex>
            $P_{polyDegree}({value}) = {result.toFixed(4)}$
          </Latex>
        </div>
      </div>
    </>
  );
}

export default FinalValue;
