"use client";
import { useForm, SubmitHandler, type FieldValues } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/app/utils";

type InputsProps = {
  firstName?: string;
  lastName?: string;
  email?: string;
  messageOrComment?: string;
  services: string[];
};

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
              <label
                htmlFor={service}
                className="block text-[16px] leading-[21px]"
              >
                {service}
              </label>
            </li>
          ))}
        </ul>
        <div className="mb-[20px]">
          <label htmlFor="name" className="block mb-4">
            <span className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1">
              Name
            </span>
            <div className="flex max-sm:flex-col sm:items-center gap-5">
              <div>
                <div
                  className={cn(
                    "border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px]",
                    errors.lastName && "border-red-500"
                  )}
                >
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    id="name"
                    className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
                  />
                </div>
                <span className="block text-[13px] leading-[17px]">First</span>
              </div>
              <div>
                <div
                  className={cn(
                    "border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px]",
                    errors.lastName && "border-red-500"
                  )}
                >
                  <input
                    {...register("lastName", { required: true })}
                    type="text"
                    id="lastName"
                    className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
                  />
                </div>
                <span className="block text-[13px] leading-[17px]">Last</span>
              </div>
            </div>
          </label>
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
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*@(gmail|yahoo|outlook)\.)[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                {...register("messageOrComment", {
                  required: true,
                })}
                name="messageOrComment"
                id="messageOrComment"
                className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
              />
            </div>
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "bg-platinum px-[12px] sm:px-[15px] py-[8px] lg:py-[10px] hover:scale-105 ease-in-out",
            isSubmitting && "opacity-50"
          )}
        >
          <span className="text-jet text-[20px] sm:text-[22px]">Submit</span>
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
