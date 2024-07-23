"use client";

import React, { useEffect, useState } from "react";

import illus from "../../../public/image-2.png";
import Image from "next/image";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

export default function Concept() {
  return (
    <div className="flex flex-row gap-10 py-12 px-20">
      <div className="border rounded-2xl border-black p-10 h-[90vh] flex items-center fixed">
        <Image src={illus} alt="math illustration w-full h-auto"/>
      </div>
      <div className="flex flex-col gap-6 absolute w-[60vw] right-0 pr-20">
        <div className="flex flex-row justify-between items-end">
          <span className="text-3xl font-bold">Divided Differences Concept & Guide</span>
          {/* <div className="border rounded-2xl border-black px-4 py-3 flex font-medium text-xl max-w-min gap-x-8">
            <div className="underline underline-offset-4 bg-green-100 hover:cursor-pointer px-4 py-1 rounded-2xl">Concept</div>
            <Link href="/" className="px-4 py-1 hover:cursor-pointer rounded-2xl hover:bg-blue-100">Calculator</Link>
            <div className="hover:bg-red-100 px-4 py-1 hover:cursor-pointer rounded-2xl">Members</div>
          </div> */}
        </div>
        <div className="border rounded-2xl border-black p-6 text-justify flex flex-col justify-center gap-2">
          <p className="font-medium">Newton&apos;s Divided Differences is a method used to construct an interpolating polynomial for a set of data points. It&apos;s named after the renowned mathematician Sir Isaac Newton, who contributed immensely to calculus and interpolation techniques. This method provides a systematic approach to finding a polynomial that passes through given data points, allowing us to estimate function values at intermediate points.</p> 
          <div className="flex flex-row justify-center gap-32 mt-4 ml-20 font-medium">
            <Latex>${`f[x_0, x_1, x_2] = \\frac{f[x_1,x_2] - f[x_0,x_1]}{x_2 - x_0}`}$</Latex>
            <Latex>{`$f[x_0, x_1, ..., x_n] = \\frac{f[x_1,x_2,...,x_n] - f[x_0,x_1,...,x_{n-1}]}{x_n - x_0}$`}</Latex>
          </div>
          <div className="flex w-full justify-center mt-6">
            <span className="px-8 py-1 bg-green-100 w-72 rounded-3xl text-center text-lg font-medium">
                Fundamental Formulas
            </span>
          </div>
        </div>
        <div className="border rounded-2xl border-black p-6 text-justify flex flex-col justify-center gap-2 font-medium">
          <p className="mb-2">The formula computes the difference between divided differences of consecutive points, divided by the difference in their respective independent variables.</p>
          <p>Once the divided differences are computed, we can construct the interpolating polynomial using Newton&apos;s form:</p>
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <p className="text-left"><Latex>${`P_n(x) = f[x_0]+(x-x_0)f[x_0,x_1]+(x-x_0)(x-x_1)f[x_0,x_1,x_2]+(x-x_0)(x-x_1)(x-x_2)`}$</Latex></p>
              <p className="text-left ml-16 pl-2"><Latex>${`f[x_0,...,x_3]+...+(x-x_0)(x-x_1)...(x-x_{n-1})f[x_0...x_n])`}$</Latex></p>
            </div>
          </div>
          <p className="text-center">The polynomial is built incrementally, incorporating the divided differences</p>
        </div>
        <div className="border rounded-2xl border-black p-6 text-justify">
          <p className="text-center font-bold pb-2 uppercase text-xl">Benefits</p>
          <ul>
            <li className="list-item list-disc ml-6"><span className="font-bold">Efficiency: </span>The method provides an efficient way to interpolate functions from discrete data points.</li>
            <li className="list-item list-disc ml-6"><span className="font-bold">Accuracy: </span>By incorporating multiple data points, the resulting interpolating polynomial often provides accurate estimates of function values at intermediate points.</li>
            <li className="list-item list-disc ml-6"><span className="font-bold">Versatility: </span>It can handle data points with non-uniform spacing, making it versatile for various applications.</li>
          </ul>
        </div>
        <div className="border rounded-2xl border-black p-6 text-justify">
          <p className="text-center font-bold pb-2 uppercase text-xl">Applications</p>
          <ol>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Numerical Analysis: </span>Newton&apos;s Divided Differences find extensive use in numerical analysis for interpolating functions from discrete data points. This is particularly valuable in scientific computing, where accurate approximations of functions are required for simulations and modeling.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Curve Fitting: </span>The method is commonly employed in curve fitting applications, where it helps in fitting smooth curves through observed data points. This is useful in various fields such as engineering, finance, and geosciences for analyzing trends and making predictions based on empirical data.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Root Finding: </span>Newton&apos;s Divided Differences can also be utilized in root-finding algorithms, such as Newton&apos;s method. By constructing interpolating polynomials, it facilitates the estimation of roots or solutions to nonlinear equations, aiding in optimization and numerical solving tasks.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Data Visualization: </span>In data visualization, Newton&apos;s Divided Differences can be used to generate smooth curves or surfaces that interpolate data points. This enhances the visual representation of data sets, enabling clearer insights and interpretations of trends and patterns.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Function Approximation: </span>The method is valuable for approximating complex functions from discrete samples, allowing researchers and practitioners to obtain continuous representations of functions for further analysis or integration into computational models.</li>
          </ol>
        </div>
        <div className="border rounded-2xl border-black p-6 text-justify">
          <p className="text-center font-bold pb-2 uppercase text-xl">Limitations of Newton&apos;s Divided Differences</p>
          <ol>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Sensitive to Data Distribution: </span>Newton&apos;s Divided Differences can be sensitive to the distribution of data points. If the data points are unevenly spaced or clustered in certain regions, the resulting interpolating polynomial may exhibit oscillations or inaccuracies.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Complexity with Large Data Sets: </span>As the number of data points increases, the computation of divided differences becomes more computationally intensive. This can lead to higher memory and processing requirements, making it less practical for very large data sets.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Extrapolation Challenges: </span>Newton&apos;s Divided Differences are primarily designed for interpolation within the range of given data points. Extrapolating beyond the range of data may result in unreliable predictions, as the interpolating polynomial may not accurately capture the behavior of the underlying function outside the data range.</li>
            <li className="list-item list-decimal ml-6"><span className="font-bold">Dependency on Data Quality: </span>The accuracy of Newton&apos;s Divided Differences heavily depends on the quality and precision of the input data. Errors or uncertainties in the data can propagate through the interpolation process, leading to inaccuracies in the estimated function values.</li>
          </ol>
        </div>
        <Link
          className="border rounded-full border-black p-1 max-w-max mb-10"
          href="/"
        >
          <div className="flex flex-row gap-2 justify-center items-center bg-blue-100 rounded-full px-4 py-1 font-semibold hover:bg-blue-200">
            <span>Proceed to Calculator</span>
            <FaArrowRight className="text-base"/>
          </div>
        </Link>
      </div>
    </div>
  );
}
