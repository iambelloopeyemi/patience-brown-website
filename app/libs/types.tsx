import type { ReactNode } from "react";

export type CardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  heading: string;
  message: ReactNode;
};

export type testimonialsProps = {
  quote: string;
  author: string;
};

export type InputsProps = {
  firstName?: string;
  lastName?: string;
  email?: string;
  messageOrComment?: string;
  name?: "firstName" | "lastName" | "email" | "messageOrComment";
  services: string[];
};
