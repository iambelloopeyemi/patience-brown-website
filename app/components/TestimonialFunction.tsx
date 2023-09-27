"use client";
import { useState } from "react";
import { testimonies } from "@/app/data/Testimonies";

export default function TestimonialFunction(): JSX.Element {
  const [selectedTestimonyIndex, setSelectedTestimonyIndex] =
    useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setSelectedTestimonyIndex(index);
  };

  return (
    <>
      <article className="text-white font-medium italic text-[26px] leading-[31px] text-center flex flex-col items-center gap-4 mb-8">
        <blockquote cite={testimonies[selectedTestimonyIndex].author}>
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
