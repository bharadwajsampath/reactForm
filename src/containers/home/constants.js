import {
  required,
  email,
  maxLength
} from "../../__shared__/validations/inputValidations";
import renderField from "./renderField";

export const fields = [
  {
    name: "customerName",
    type: "text",
    component: renderField,
    placeholder: "FirstName LastName",
    visible: true,
    label: "Name",
    validate: [required(true)]
  }
];
