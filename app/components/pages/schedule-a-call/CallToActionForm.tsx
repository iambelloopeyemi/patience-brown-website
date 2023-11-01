"use client";
import { useForm, SubmitHandler, type FieldValues } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { InputsProps } from "@/app/libs/types";
import CheckboxInput from "./CheckboxInput";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import TextAreaInput from "./TextAreaInput";
import SubmitButton from "./SubmitButton";

const EMAILJS_SERVICE_ID = "service_nyl12u1";
const EMAILJS_TEMPLATE_ID = "template_llwfx3c";
const EMAILJS_PUBLIC_KEY = "yT05oMkKAmsUE2SVV";

const services: string[] = [
  "Ghostwriting services",
  "Book coaching services",
  "Finding clarity to get started",
  "Pricing",
  "Other (describe below)",
];

export default function CallToActionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputsProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      messageOrComment: "",
      services: [],
    },
  });

  const onSubmit: SubmitHandler<InputsProps> = async (data: FieldValues) => {
    const { firstName, lastName, email, messageOrComment, services } = data;

    const selectedServices: string = services
      .map((isChecked: boolean, index: number) =>
        isChecked ? services[index] : null
      )
      .filter((service: string) => service !== null)
      .join(", ");

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message: `Service(s): ${selectedServices}: ${messageOrComment}`,
    };
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log(templateParams);
      if (templateParams) {
        toast.success("Email sent successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Failed to send email.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Failed to send email.", error);
    } finally {
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxInput register={register} services={services} />
        <div className="mb-[20px]">
          <label htmlFor="name" className="block mb-4">
            <span className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1">
              Name
            </span>
            <div className="flex max-sm:flex-col sm:items-center gap-5">
              <NameInput
                register={register}
                errors={errors}
                name="firstName"
                label="First"
              />
              <NameInput
                register={register}
                errors={errors}
                name="lastName"
                label="Last"
              />
            </div>
          </label>
          <EmailInput register={register} errors={errors} />
          <TextAreaInput register={register} errors={errors} />
        </div>
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
      <ToastContainer />
    </>
  );
}
