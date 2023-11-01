import { cn } from "@/app/utils";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InputsProps } from "@/app/libs/types";

type EmailInputProps = {
  register: UseFormRegister<InputsProps>;
  errors: FieldErrors<InputsProps>;
  name?: "email";
};

export default function EmailInput({
  register,
  errors,
  name = "email",
}: EmailInputProps) {
  return (
    <label htmlFor="email" className="block mb-4">
      <span className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1">
        Email
      </span>
      <div
        className={cn(
          "border w-[240px] sm:w-[340px] h-[38px] px-[10px] py-[6px] flex justify-center items-center",
          errors.email && "border-red-500"
        )}
      >
        <input
          {...register(name, {
            required: true,
            pattern: {
              value: /^(?=.*@(gmail|yahoo|outlook)\.)[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          type="text"
          id="email"
          className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-[13px] leading-[17px]">
          {errors.email.message}
        </p>
      )}
    </label>
  );
}
