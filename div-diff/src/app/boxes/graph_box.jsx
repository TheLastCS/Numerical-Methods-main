"use client";

import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useEffect, useRef } from "react";

import { Line, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// const options = {
//   responsive: true,
//   scales: {
//     y: {
//       ticks: {
//         color: "white", // Set color of y-axis labels to white
//       },
//       grid: {
//         color: "red",
//       },
//     },
//     x: {
//       ticks: {
//         color: "white", // Set color of x-axis labels to white
//       },
//       grid: {
//         color: "red",
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       position: "top",
//     },
//   },
// };

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

function GraphValue({ inputs, polyDegree, value }) {
  const keys = Object.keys(inputs);
  polyDegree = parseInt(polyDegree);

  const sliced = Object.keys(inputs)
    .slice(0, polyDegree + 1)
    .reduce((result, key) => {
      result[key] = inputs[key];
      return result;
    }, {});

  const chartData = {
    labels: Object.keys(sliced).map((key) => sliced[key].x),
    datasets: [
      {
        label: "Interpolating Polynomial",
        data: Object.keys(sliced).map((key) =>
          interpolatePolynomial(sliced[key].x, sliced)
        ),
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4
      },
      {
        label: "Input Points",
        data: Object.values(sliced).map((point) => ({
          x: point.x,
          y: point.y,
          label: `(${point.x},${point.y})`, // Custom tooltip label
        })),
        backgroundColor: "red",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };
  const chartContainerStyle = {
    padding: "20px",
    width: "1000px", // Adjust the width as needed
    height: "600px", // Adjust the height as needed
    margin: "auto", // Center the chart horizontally
  };
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.data[tooltipItem.dataIndex].label || "";
          },
        },
      },
    },
  };

  return (
    <>
      <div className="bg-fuchsia-100 flex flex-row items-center justify-center rounded-2xl py-1 w-36 mb-4">
        <div className="text-xl text-font">Graph</div>
      </div>
      <div className="">
        <div style={chartContainerStyle}>
          <Line data={chartData} options={options} />
        </div>
      </div>
    </>
  );
}

export default GraphValue;
