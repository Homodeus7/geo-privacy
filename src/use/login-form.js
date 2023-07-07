import { useField } from "vee-validate";
import * as yup from "yup";

export function useLoginForm() {
  const { value: email, errorMessage: eError } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Please enter email")
      .email()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please enter email")
  );

  const { value: password, errorMessage: pError } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Please enter password")
      .matches(/\w*[A-Z]\w*/, "Password must have a uppercase letter")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
  );

  return {
    email,
    password,
    eError,
    pError,
  };
}
