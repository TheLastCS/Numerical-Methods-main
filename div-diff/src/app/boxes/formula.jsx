import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

function calculateDividedDifferences(points) {
  const keys = Object.keys(points);
  const n = keys.length;
  const dividedDifferences = [];

  for (let i = 0; i < n; i++) {
    dividedDifferences.push(points[keys[i]].y);
  }

  for (let j = 1; j < n; j++) {
    for (let i = n - 1; i >= j; i--) {
      dividedDifferences[i] =
        (dividedDifferences[i] - dividedDifferences[i - 1]) /
        (points[keys[i]].x - points[keys[i - j]].x);
    }
  }

  return dividedDifferences;
}

function generatePolynomialString(points, dividedDifferences) {
  const keys = Object.keys(points);
  const pointsLength = keys.length;
  let polynomial = `= `;
  const n = keys.length;

  for (let i = 0; i < n; i++) {
    if (dividedDifferences[i] != 0) {
      polynomial += dividedDifferences[i].toFixed(4);
      for (let j = 0; j < i; j++) {
        polynomial += `(x - ${points[keys[j]].x})`;
      }
      if (i !== n - 1) {
        polynomial += " + ";
      }
    }
  }
  return polynomial;
}

function cleanExpression(expression) {
  expression = expression.trim();

  // Check if the last character is '+'
  if (expression.endsWith("+")) {
    // Remove the last character
    expression = expression.slice(0, -1);
  }
  return expression;
}

function formatPolynomial(polyDegree) {
  if (polyDegree > 2) {
    let firstTerm = [];
    let secondTerm = [];
    let firstVal = 2;
    let secondVal = 3;
    let final = "+ ";

    for (let i = firstVal; i < polyDegree; i++) {
      let temp = "";
      for (let j = 0; j <= i; j++) {
        temp += "(x-x_" + j + ")";
      }
      firstTerm.push(temp);
    }

    for (let i = secondVal; i <= polyDegree; i++) {
      let temp = "f[";
      for (let j = 0; j <= i; j++) {
        temp += "x_" + j;
        if (j + 1 <= i) {
          temp += ",";
        }
      }
      temp += "]";
      secondTerm.push(temp);
    }

    for (let i = 0; i < firstTerm.length; i++) {
      final += firstTerm[i] + secondTerm[i];
      if (i + 1 < firstTerm.length) {
        final += " + ";
      }
    }

    // let temp = ["(x-x_0)f[x_0,x_1]", "(x-x_0)f[x_0,x_1,x_2]"];
    // for(let i = 0; i < temp.length; i++){
    //   temp.push(firstTerm[i] + secondTerm[i]);
    // }

    return final;
  }
}

function countXOccurrences(str) {
  // Use regex to match all occurrences of the letter 'x'
  const regex = /x/g;
  const matches = str.match(regex);

  // Count the number of matches
  const count = matches ? matches.length : 0;

  return count;
}

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

function Formula({ inputs, polyDegree, value }) {
  const keys = Object.keys(inputs);
  //console.log("keys:", keys);
  polyDegree = parseInt(polyDegree);

  const sliced = Object.keys(inputs)
    .slice(0, polyDegree + 1)
    .reduce((result, key) => {
      result[key] = inputs[key];

      return result;
    }, {});

  //console.log("sliced:", sliced);
  // const slicedInputs = Object.fromEntries(keys.slice(0, polyDegree + 1).map(key => [key, inputs[key]]));
  const result = interpolatePolynomial(value, sliced);
  const dividedDifferences = calculateDividedDifferences(sliced);
  const polynomialString = generatePolynomialString(sliced, dividedDifferences);
  const cleanedExpression = cleanExpression(polynomialString);
  const xCount = countXOccurrences(polynomialString);
  const polynomialFormat = formatPolynomial(polyDegree);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-antiqueWhite flex flex-row items-center justify-center rounded-2xl py-1 mb-4 w-80">
        <div className="text-xl text-font">Interpolation Polynomial</div>
      </div>
      <div className="p-2 text-sm w-full flex flex-col items-center">
        <p className="pb-4"><Latex>$P_{polyDegree}(x) = f(x_0) + (x-x_0)f[x_0,x_1] + (x-x_0)f[x_0,x_1,x_2] {polynomialFormat}$</Latex></p>
        <p className="pb-4">
          <Latex>
            $P_{xCount}({polyDegree})$ ${cleanedExpression}$
          </Latex>{" "}
        </p>
        <span className="bg-antiqueWhite py-2 px-5 rounded-full">
          <Latex>
            $P_{polyDegree}({value}) = {result.toFixed(4)}$
          </Latex>
        </span>
      </div>
    </div>
  );
}

export default Formula;
