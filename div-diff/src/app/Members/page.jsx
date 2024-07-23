"use client";

import React from "react";
import Link from "next/link";
import hannah from "../../../public/hannah.png";
import jomar from "../../../public/jomar.png";
import christian from "../../../public/christian.png";
import Image from "next/image";

export default function Members() {
  return (
    <div className="flex flex-col px-16 py-8 w-full items-center gap-y-8">
      <div className="flex flex-row justify-between items-end w-full">
        <span className="text-3xl font-bold">Group 3 Members</span>
        <div className="border rounded-2xl border-black px-4 py-2 flex font-medium text-xl max-w-min gap-x-8">
          <Link
            href="/Concept"
            className="hover:bg-green-100 hover:cursor-pointer px-4 py-2 rounded-xl"
          >
            Concept
          </Link>
          <Link
						href="/"
						className="px-4 py-2 hover:cursor-pointer rounded-xl hover:bg-blue-100"
					>
            Calculator
          </Link>
          <div className="bg-red-100 px-4 py-2 hover:cursor-pointer rounded-xl underline underline-offset-4">
            Members
          </div>
        </div>
      </div>
			<div className="border rounded-2xl border-black px-12 py-8 w-auto flex flex-row gap-x-8">
				<div className="flex flex-col gap-y-4">
					<Image src={hannah} alt="hannah"/>
					<p className="px-8 py-1 bg-fuchsia-100 w-64 rounded-3xl text-center text-lg font-medium">Hannah Labana</p>
				</div>
				<div className="flex flex-col gap-y-4">
					<Image src={jomar} alt="jomar"/>
					<p className="px-8 py-1 bg-antiqueWhite w-64 rounded-3xl text-center text-lg font-medium">Jomar Leaño</p>
				</div>
				<div className="flex flex-col gap-y-4">
					<Image src={christian} alt="christian"/>
					<p className="px-8 py-1 bg-lightGreen w-64 rounded-3xl text-center text-lg font-medium">Christian Stewart</p>
				</div>
			</div>
			<div className="border rounded-2xl border-black px-12 py-8 w-auto flex flex-row gap-x-8">
        <span className="text-3xl font-bold">References</span>
        <ul className="list-disc pl-8">
          <li>https://ebooks.inflibnet.ac.in/itp15/chapter/newtons-divided-difference-interpolation-1/</li>
          <li>https://ftp.cs.wisc.edu/Approx/deboor2.pdf</li>
          <li>https://www.researchgate.net/publication/308576265_Newton&apos;s_Divided_Difference_Interpolation_formula_Representation_of_Numerical_Data_by_a_Polynomial_curve</li>
        </ul>
			</div>
    </div>
  );
}
