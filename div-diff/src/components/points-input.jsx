"use client";

import React, { useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";


export default function PointInput({
  index,
  numPoints,
  data,
  handleDelete,
  handleInputX,
  handleInputY,
}) {
  //useEffect(() => {console.log(inputs)});

  return (
    <div className="flex flex-row mb-3 items-center">
      <span>{index}</span>
      <input
        type="number"
        className="w-36 bg-stone-100 rounded-xl py-1 px-4 text-font text-base h-7 mx-8"
        value={data.x}
        onChange={(e) => handleInputX(parseFloat(e.target.value), index)}
      />
      <input
        type="number"
        className="w-36 bg-stone-100 rounded-xl py-1 px-4 text-font text-base h-7 mr-2"
        value={data.y}
        onChange={(e) => handleInputY(parseFloat(e.target.value), index)}
      />
      <HiMiniXMark
        onClick={() => handleDelete(index)}
        className={`hover:cursor-pointer hover:bg-stone-200 ${
          numPoints < 4 ? "invisible" : ""
        }`}
      />
    </div>
  );
}
