import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { InputsProps } from "@/app/libs/types";
import { cn } from "@/app/utils";

type NameInputProps = {
  register: UseFormRegister<InputsProps>;
  errors: FieldErrors<InputsProps>;
  name: "firstName" | "lastName";
  label: string;
};

export default function NameInput({
  register,
  errors,
  name,
  label,
}: NameInputProps) {
  return (
    <div>
      <div
        className={cn(
          "border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px]",
          errors.name && "border-red-500"
        )}
      >
        <input
          {...register(name, { required: true })}
          type="text"
          id="name"
          className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
        />
      </div>
      <span className="block text-[13px] leading-[17px]">{label}</span>
    </div>
  );
}
