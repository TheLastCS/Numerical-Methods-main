"use client";

import React, { useEffect } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

// Function to calculate divided differences
function DivTable({
  numPoints,
  inputs,
  setDivTable,
}) {
    
    const n = numPoints;
    const table = [];


    // useEffect(() => {
    //   setDivTable(table);
    // },[table])

    // Initialize the table with the values
    for (let i = 0; i < n; i++) {
      table[i] = [inputs[i].x, inputs[i].y];
    }

    let valArr = [];
    for(let j = 0; j < n-1; j++){
      let tempArr = [];
      for(let i = 0; i < (n-j-1); i++){
        if(table[i+1][j+1]){
          let num_first = table[i+1][j+1].sol ? table[i+1][j+1].val : table[i+1][j+1];
          let num_second = table[i][j+1].sol ? table[i][j+1].val : table[i][j+1];
          let den_first = table[i+1+j][0].sol ? table[i+1+j][0].val : table[i+1+j][0];
          let den_second = table[i][0].sol ? table[i][0].val : table[i][0];
          let temp = (num_first - num_second) / (den_first - den_second)
          //console.log("temp" + table[i+1][j+1] + "-" + table[i][j+1] + " / " + table[i+1+j][0] + "-" + table[i][0] + " = " + temp)
          if(num_second < 0) num_second =  "(" + num_second + ")";
          if(den_second < 0) den_second =  "(" + den_second + ")";
          let solution = `\\frac{${num_first} - ${num_second}}{${den_first} - ${den_second}}`;
          tempArr.push({sol: solution, val: temp.toFixed(4)});
          //tempArr.push(temp.toFixed(4));
        }
      }
      for(let row = 0; row < n; row++){
        table[row][j+2] = tempArr[row];
        //console.log(table);
      }
    }

    // Render the divided differences table using HTML and Tailwind CSS
    return (
        <div className="w-full flex flex-col items-center">
          <div className="bg-lightGreen flex flex-row items-center justify-center rounded-2xl py-1 w-80 mb-4">
            <div className="text-xl text-black">Divided Differences Table</div>
          </div>
          <div className="p-2 w-full flex justify-center">
            <table className="border-collapse w-auto px-4">
              <thead>
                <tr className="w-full text-start">
                  <th className="w-auto py-2 text-start px-5 text-sm"><Latex>$x_i$</Latex></th>
                  {Array.from({ length: n }, (_, i) => (
                    <th key={i} className="w-auto text-sm text-start px-5"> 
                      <Latex> {i == 0 ? `$f(x_0)$` : i == 1 ? `$f[x_0, x_1]$` : `$f[x_0,...,x_{{${i}}}]$`} </Latex>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={i} className="border-b w-auto">
                    {row.map((value, j) => ( 
                      <td key={j} className="border-t border-b py-2 px-5 text-sm hover:bg-slate-100">
                        { value ? value.sol ? 
                        <><span className="text-base"><Latex>${value.sol}$</Latex></span><Latex>${" = " + value.val}$</Latex></>
                        : <Latex>${value}$</Latex> 
                        : `` }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
}

export default DivTable;

