import React from "react";
import { FieldArray } from "redux-form";
import {
  required,
  isMatch,
  validateAge
} from "../../__shared__/validations/inputValidations";
import { renderInput, renderSelect, renderContact } from "./renderField";

export const fields = [
  {
    name: "customerName",
    type: "text",
    component: renderInput,
    placeholder: "FirstName LastName",
    visible: true,
    label: "Name",
    validate: [
      required(true),
      isMatch(/^[A-Z][a-z]+\s[A-Z][a-z]+$/, "FirstName LastName")
    ] // required and required firstName and lastName
  },
  {
    name: "dob",
    type: "date",
    component: renderInput,
    placeholder: "Date of Birth",
    visible: true,
    label: "Date of Birth",
    validate: [required(true), validateAge()] // required and required firstName and lastName
  },
  {
    name: "gender",
    type: "select",
    component: renderSelect,
    placeholder: "Gender",
    visible: true,
    label: "Gender (optional)",
    options: ["Male", "Female"]
  },
  {
    name: "guardianConsent",
    type: "checkbox",
    component: renderInput,
    placeholder: "Gender",
    visible: true,
    label: "Require guardian consent"
  }
];

export const guardianDetails = [
  {
    name: "gaurdianName",
    type: "text",
    component: renderInput,
    placeholder: "FirstName LastName",
    visible: true,
    label: "Gaurdian Name",
    validate: [
      required(true),
      isMatch(/^[A-Z][a-z]+\s[A-Z][a-z]+$/, "FirstName LastName")
    ] // required and required firstName and lastName
  }
];

export const contactFieldArray = (name, title, index) => (
  <FieldArray
    name={name}
    key={`${name}-${index}`}
    title={title}
    component={renderContact}
  />
);
