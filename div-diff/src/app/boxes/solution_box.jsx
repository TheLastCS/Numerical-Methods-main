"use client";

import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

function solutionBox({
    numPoints,
    inputs,
    divTable,
  }) {

    const solution = inputs.map((input, index) => {
        const x = input.x;
        const f = input.f;
        let solution = "";

        if (index === 0) {
            solution = `f(${x}) = ${f}`;
        } else {
            let terms = [];
            for (let i = 0; i <= index; i++) {
                let term = "";
                for (let j = 0; j <= i; j++) {
                    term += `(x - ${inputs[j].x})`;
                }
                terms.push(term);
            }
            solution = `f(${x}) = ${terms.join(" * ")} * ${inputs[index].f}`;
        }
        //console.log("solution",solution)

        return solution;
    });

   // Define a function to calculate the numerator of divided differences
    const calculateNumerator = (x0, x1, x2, f0, f1, f2) => {
        const numerator = ((f2 - f1) / (x2 - x1)) - ((f1 - f0) / (x1 - x0));
        return numerator;
    };

    // Define a function to calculate the divided differences solution dynamically
    const calculateDividedDifferences = (x0, x1, x2, f0, f1, f2) => {
        const numerator = calculateNumerator(x0, x1, x2, f0, f1, f2);
        const denominator = x2 - x0;
        return numerator / denominator;
    };

    // Get dynamic values from the solution array
    const x0 = 3.2;
    const x1 = 2.7;
    const x2 = 1.0;
    const f0 = 22.0;
    const f1 = 17.8;
    const f2 = 14.2;

    // Calculate the divided differences solution dynamically
    const dividedDifferencesSolution = calculateDividedDifferences(x0, x1, x2, f0, f1, f2);
    const numerator = calculateNumerator(x0, x1, x2, f0, f1, f2);
    const denominator = x2-x0;

    //console.log(terms);

    return (
        <div className="w-full p-4">
            <div className="flex items-center justify-center pb-2">
                <div className="pt-2 text-xl text-font">DIVIDED DIFFERENCES SOLUTION</div>
            </div>
            <div className="p-2 w-full flex justify-center">
                {/* {solution.map((sol, index) => (
                    <div key={index}>
                        <Latex>{`P${index}(x) = ${sol}`}</Latex>
                    </div>
                ))} */}
                <Latex>
                    {'$$f\\left[x_0, x_1, x_2\\right]=\\frac{f\\left[x_1, x_2\\right]-f\\left[x_0, x_1\\right]}{x_2-x_0}=\\frac{\\frac{f_2-f_1}{x_2-x_1}-\\frac{f_1-f_0}{x_1-x_0}}{x_2-x_0}$$'}
                    {`$$f\\left[x_0=${x0}, x_1=${x1}, x_2=${x2}\\right]=\\frac{\\frac{${f2}-${f1}}{${x2}-${x1}}-\\frac{${f1}-${f0}}{${x1}-${x0}}}{${x2}-${x0}}=\\frac{${numerator}}{${denominator}}=${dividedDifferencesSolution}$$`}
                </Latex>
            </div>
        </div>
    );
  }

export default solutionBox;