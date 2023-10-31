"use client";
import { useClick } from "../hooks/useClick";
import { testimoniesProps } from "@/app/libs/types";
import TestimonialButton from "./TestimonialButton";

const testimonies: testimoniesProps[] = [
  {
    quote: `Working with Patience was a joy! I loved how she guided me through the process and made sure we touched base every week. 
      I felt she captured my voice and message so well. I love how simple and clear her process was for getting my book finally finished.
      Thank you!!`,
    author: "Opeyemi Bello",
  },
  {
    quote: `Another testimonial goes here.`,
    author: "Author 2",
  },
  {
    quote: `And one more testimonial here.`,
    author: "Author 3",
  },
];

export default function Testimonial() {
  const { selectedTestimonyIndex, handleButtonClick } = useClick();

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
      {testimonies && (
        <TestimonialButton
          selectedTestimonyIndex={selectedTestimonyIndex}
          handleButtonClick={handleButtonClick}
          data={testimonies}
        />
      )}
    </>
  );
}
