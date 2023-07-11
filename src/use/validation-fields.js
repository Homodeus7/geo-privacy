import { useField } from "vee-validate";
import * as yup from "yup";

export function useValidationFields() {
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

  const { value: verification, errorMessage: vError } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Пожалуйста, введите код")
      .min(6, ({ min }) => `Код должен содержать ${min} символов`)
  );

  return {
    email,
    password,
    eError,
    pError,
    verification,
    vError,
  };
}
