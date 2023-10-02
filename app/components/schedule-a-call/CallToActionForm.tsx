"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { validationSchema } from "@/app/utils/validationSchema";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

interface ValidationErrorsProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  messageOrComment?: string;
}

const initialValidationErrors: ValidationErrorsProps = {
  firstName: "",
  lastName: "",
  email: "",
  messageOrComment: "",
};

export default function CallToActionForm(): JSX.Element {
  const [formData, setFormData] = useState({
    firstName: "" as string,
    lastName: "" as string,
    email: "" as string,
    messageOrComment: "" as string,
    services: [] as string[],
  });
  const [validationErrors, setValidationErrors] =
    useState<ValidationErrorsProps>(initialValidationErrors);

  const handleCheckboxChange = (service: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(service)
        ? prevData.services.filter((option) => option !== service)
        : [...prevData.services, service],
    }));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: `Service(s): ${formData.services} - ${formData.messageOrComment}`,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }
      console.log(templateParams);
      toast.success("Email sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors: ValidationErrorsProps = {};
        error.inner.forEach((err: Yup.ValidationError) => {
          errors[err.path] = err.message;
        });

        setValidationErrors(errors);

        setTimeout(() => {
          setValidationErrors(initialValidationErrors);
        }, 5000);

        console.error("Failed to send email.", error);
        toast.error("Failed to send email.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } finally {
      if (templateParams) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          messageOrComment: "",
          services: [],
        });
      }
    }
  };

  const services: string[] = [
    "Ghostwriting services",
    "Book coaching services",
    "Finding clarity to get started",
    "Pricing",
    "Other (describe below)",
  ];

  return (
    <>
      <form onSubmit={sendEmail}>
        <ul className="mb-5">
          <span className="block font-bold text-[16px] leading-[21px] mb-2">
            I&apos;d like more information about:
          </span>
          {services.map((service, index: number) => (
            <li key={index} className="mb-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={service}
                  name={service}
                  checked={formData.services.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                  className="block w-[14px] h-[14px]"
                />
                <label
                  htmlFor={service}
                  className="block text-[16px] leading-[21px]"
                >
                  {service}
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-[20px]">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1"
            >
              Name
            </label>
            <div className="flex max-sm:flex-col sm:items-center gap-5">
              <div>
                <div
                  className={`border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px] ${
                    validationErrors.firstName ? "border-red-500" : ""
                  }`}
                >
                  <input
                    type="text"
                    id="name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
                  />
                </div>
                {validationErrors.firstName && (
                  <p className="text-red-500 text-[13px] leading-[17px]">
                    {validationErrors.firstName}
                  </p>
                )}
                <span className="block text-[13px] leading-[17px]">First</span>
              </div>
              <div>
                <div
                  className={`border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px] ${
                    validationErrors.lastName ? "border-red-500" : ""
                  }`}
                >
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
                  />
                </div>
                {validationErrors.lastName && (
                  <p className="text-red-500 text-[13px] leading-[17px]">
                    {validationErrors.lastName}
                  </p>
                )}
                <span className="block text-[13px] leading-[17px]">Last</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1"
            >
              Email
            </label>
            <div
              className={`border w-[240px] sm:w-[340px] h-[38px] px-[10px] py-[6px] flex justify-center items-center ${
                validationErrors.email ? "border-red-500" : ""
              }`}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
              />
            </div>
            {validationErrors.email && (
              <p className="text-red-500 text-[13px] leading-[17px]">
                {validationErrors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="messageOrComment"
              className="block font-bold text-[16px] leading-[21px] after:content-['*'] after:ml-0.5 after:text-red-500 mb-1"
            >
              Comment or Message
            </label>
            <div
              className={`border w-[240px] sm:w-[340px] h-[120px] px-[10px] py-[6px] flex justify-center items-center ${
                validationErrors.messageOrComment ? "border-red-500" : ""
              }`}
            >
              <textarea
                name="messageOrComment"
                id="messageOrComment"
                value={formData.messageOrComment}
                onChange={handleInputChange}
                className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
              />
            </div>
            {validationErrors.messageOrComment && (
              <p className="text-red-500 text-[13px] leading-[17px]">
                {validationErrors.messageOrComment}
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-platinum px-[12px] sm:px-[15px] py-[8px] lg:py-[10px] hover:scale-105 ease-in-out"
          >
            <span className="text-jet text-[20px] sm:text-[22px]">Submit</span>
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
