import type { testimonialsProps } from "@/app/libs/types";
import { cn } from "@/app/utils";

type TestimonialButtonProps = {
  selectedTestimonyIndex: number;
  handleButtonClick: (index: number) => void;
  data: testimonialsProps[];
};

export default function TestimonialButton({
  selectedTestimonyIndex,
  handleButtonClick,
  data,
}: TestimonialButtonProps) {
  return (
    <div className="flex justify-center items-center gap-3">
      {data.map((_, index: number) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={cn(
            selectedTestimonyIndex === index
              ? "bg-white p-2 rounded-full outline-dashed outline-1 outline-white outline-offset-2"
              : "bg-white p-2 rounded-full"
          )}
        />
      ))}
    </div>
  );
}
