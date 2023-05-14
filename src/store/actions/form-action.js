import { SET_NAME } from "./form-type";
import { SET_AGE } from "./form-type";
import { SET_EMAIL } from "./form-type";
import { SET_PHONE_NUMBER } from "./form-type";
import { SET_ERRORS } from "./form-type";
import { RESET_FORM } from "./form-type";

export const setName = (name) => ({
  type: SET_NAME,
  payload: name
});

export const setAge = (age) => ({
  type: SET_AGE,
  payload: age
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email
});

export const setPhoneNumber = (phoneNumber) => ({
  type: SET_PHONE_NUMBER,
  payload: phoneNumber
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors
});

export const resetForm = () => ({
  type: RESET_FORM
});
