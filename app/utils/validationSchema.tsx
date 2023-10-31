import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Your First Name is required"),
  lastName: Yup.string().required("Your Last Name is required"),
  email: Yup.string().email("Invalid email").required("Your Email is required"),
  messageOrComment: Yup.string().required("Your Message is required"),
});
