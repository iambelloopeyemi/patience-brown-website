"use client";
import { useState } from "react";
import { cormorant_garamond } from "@/app/utils/font";
import { testimonies } from "@/app/data/Testimonies";

export default function Testimonial(): JSX.Element {
  const [selectedTestimonyIndex, setSelectedTestimonyIndex] =
    useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setSelectedTestimonyIndex(index);
  };

  return (
    <section className="bg-yinmn-blue px-5 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div
        className={`${cormorant_garamond.className} text-white font-medium text-2xl text-center flex flex-col items-center gap-4 mb-10`}
      >
        <blockquote className="italic">
          {`"${testimonies[selectedTestimonyIndex].quote}"`}
        </blockquote>
        <p className="italic">
          ~
          <span className="text-ecru">
            {testimonies[selectedTestimonyIndex].author}
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-3">
        {testimonies.map((_, index: number) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`${
              selectedTestimonyIndex === index
                ? "bg-white p-2 rounded-full outline-dashed outline-1 outline-white outline-offset-2"
                : "bg-white p-2 rounded-full"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
