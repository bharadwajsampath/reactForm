import moment from "moment";
import error from "./error";

const isEmpty = value =>
  value === undefined || value === null || value.toString().trim() === "";

export const isChecked = (isRequired, message = null) => value => {
  if (isRequired && !value) {
    return error(message || "Required", undefined, message !== null);
  }

  return undefined;
};

export const email = value => {
  // Let's not start a debate on email regex. This is just for an example app!
  if (
    !isEmpty(value) &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    return error("Please enter a valid email address");
  }
  return undefined;
};

export const required = (isRequired, message = null) => value => {
  if (isEmpty(value) && isRequired) {
    return error(message || "Required", undefined, message !== null);
  }
  return undefined;
};

export const minLength = min => value => {
  if (!isEmpty(value) && value.length < min) {
    return error(`Must be at least ${min} characters`);
  }
  return undefined;
};

export const maxLength = max => value => {
  if (!isEmpty(value) && value.length > max) {
    return error(`Must be no more than ${max} characters`);
  }
  return undefined;
};

export const isMatch = (
  match,
  errorTitle = "Please enter a valid value",
  errorMessage = null
) => value => {
  if (match) {
    const regex = new RegExp(match);
    // !isEmpty is there for optional fields that only validate when entered
    if (!isEmpty(value) && !regex.test(value)) {
      return error(errorTitle, errorMessage);
    }
  }
  return undefined;
};

export const notIncludes = arrList => value => {
  let validationError;
  arrList.forEach(obj => {
    if (obj.match === value) {
      const message = `Can't contain the value ${obj.display}`;
      validationError = error(message);
    }
  });

  return validationError;
};

export const validateAge = () => value => {
  let errorMessage = "You must be at least 18 years old to register with us.";
  const valueYear = moment(value).year();
  const currentYear = moment(Date.now()).year();
  if (currentYear - valueYear < 18) {
    return error(errorMessage);
  }
  return undefined;
};
