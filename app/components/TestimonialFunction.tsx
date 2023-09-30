"use client";
import { useState } from "react";
import { TestimonialData as testimonies } from "@/app/data/ComponentData";

export default function TestimonialFunction(): JSX.Element {
  const [selectedTestimonyIndex, setSelectedTestimonyIndex] =
    useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setSelectedTestimonyIndex(index);
  };

  return (
    <>
      <article className="text-white font-medium italic text-[26px] leading-[31px] text-center mb-8">
        <blockquote
          cite={testimonies[selectedTestimonyIndex].author}
          className="mb-4"
        >
          {`"${testimonies[selectedTestimonyIndex].quote}"`}
        </blockquote>
        <p>
          ~
          <span className="text-ecru">
            {testimonies[selectedTestimonyIndex].author}
          </span>
        </p>
      </article>
      <div className="flex justify-center items-center gap-3">
        {testimonies.map<JSX.Element>((_, index: number) => (
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
    </>
  );
}
