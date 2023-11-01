"use client";
import { useClick } from "@/app/hooks/useClick";
import TestimonialButton from "./TestimonialButton";
import { testimonials } from "@/app/data";

export default function Testimonial() {
  const { selectedTestimonyIndex, handleButtonClick } = useClick();

  return (
    <>
      <article className="text-white font-medium italic text-[26px] leading-[31px] text-center mb-8">
        <blockquote
          cite={testimonials[selectedTestimonyIndex].author}
          className="mb-4"
        >
          {`"${testimonials[selectedTestimonyIndex].quote}"`}
        </blockquote>
        <p>
          ~
          <span className="text-ecru">
            {testimonials[selectedTestimonyIndex].author}
          </span>
        </p>
      </article>
      {testimonials && (
        <TestimonialButton
          selectedTestimonyIndex={selectedTestimonyIndex}
          handleButtonClick={handleButtonClick}
          data={testimonials}
        />
      )}
    </>
  );
}
