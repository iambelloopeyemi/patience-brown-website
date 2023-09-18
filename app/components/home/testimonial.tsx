"use client";
import { useState } from "react";
import { cormorant_garamond } from "@/app/utils/font";

interface testimoniesProps {
  quote: string;
  author: string;
}

const testimonies: testimoniesProps[] = [
  {
    quote:
      "Working with Patience was a joy! I loved how she guided me through the process and made sure we touched base every week. I felt she captured my voice and message so well. I love how simple and clear her process was for getting my book finally finished. Thank you!!",
    author: "Opeyemi Bello",
  },
  {
    quote: "Another testimonial goes here.",
    author: "Author 2",
  },
  {
    quote: "And one more testimonial here.",
    author: "Author 3",
  },
];

export default function Testimonial() {
  const [selectedTestimonyIndex, setSelectedTestimonyIndex] =
    useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setSelectedTestimonyIndex(index);
  };

  return (
    <section className="bg-yinmn-blue px-4 sm:px-10 lg:px-20 py-20">
      <div
        className={`${cormorant_garamond.className} font-medium text-white text-2xl text-center flex flex-col items-center gap-4 mb-5`}
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
                ? "bg-white p-2 rounded-full outline-dashed outline-white outline-1 outline-offset-2"
                : "bg-white p-2 rounded-full"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
