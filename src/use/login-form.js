import { useField } from "vee-validate";
import * as yup from "yup";

export function useLoginForm() {
  const { value: email, errorMessage: eError } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Пожалуйста, введите электронную почту")
      .email("Пожалуйста, введите электронную почту")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Пожалуйста, введите электронную почту"
      )
  );

  const { value: password, errorMessage: pError } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Пожалуйста, введите пароль")
      .matches(/\w*[A-Z]\w*/, "Пароль должен иметь заглавную букву")
      .min(8, ({ min }) => `Пароль должен содержать не менее ${min} символов`)
  );

  return {
    email,
    password,
    eError,
    pError,
  };
}
