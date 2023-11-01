import { UseFormRegister } from "react-hook-form";
import type { InputsProps } from "@/app/libs/types";

type CheckboxInputProps = {
  register: UseFormRegister<InputsProps>;
  services: string[];
};

export default function CheckboxInput({
  register,
  services,
}: CheckboxInputProps) {
  return (
    <ul className="mb-5">
      <span className="block font-bold text-[16px] leading-[21px] mb-2">
        I&apos;d like more information about:
      </span>
      {services.map((service, index: number) => (
        <li key={index} className="flex items-center gap-3 mb-2">
          <input
            {...register(`services.${index}`)}
            type="checkbox"
            id={service}
            value={service}
            className="block w-[14px] h-[14px]"
          />
          <label htmlFor={service} className="block text-[16px] leading-[21px]">
            {service}
          </label>
        </li>
      ))}
    </ul>
  );
}
