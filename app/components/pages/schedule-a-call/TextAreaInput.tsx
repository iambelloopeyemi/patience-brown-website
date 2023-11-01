import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InputsProps } from "@/app/libs/types";
import { cn } from "@/app/utils";

type TextAreaInputProps = {
  register: UseFormRegister<InputsProps>;
  errors: FieldErrors<InputsProps>;
  name?: "messageOrComment";
};

export default function TextAreaInput({
  register,
  errors,
  name = "messageOrComment",
}: TextAreaInputProps) {
  return (
    <label htmlFor="messageOrComment">
      <span className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1">
        Comment or Message
      </span>
      <div
        className={cn(
          "border w-[240px] sm:w-[340px] h-[120px] px-[10px] py-[6px] flex justify-center items-center",
          errors.messageOrComment && "border-red-500"
        )}
      >
        <textarea
          {...register(name, {
            required: true,
          })}
          name="messageOrComment"
          id="messageOrComment"
          className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
        />
      </div>
    </label>
  );
}
