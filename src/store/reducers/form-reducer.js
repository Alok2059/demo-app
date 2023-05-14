import { SET_NAME } from "../actions/form-type";
import { SET_AGE } from "../actions/form-type";
import { SET_EMAIL } from "../actions/form-type";
import { SET_PHONE_NUMBER } from "../actions/form-type";
import { SET_ERRORS } from "../actions/form-type";
import { RESET_FORM } from "../actions/form-type";

const initialState = {
  name: "",
  age: "",
  email: "",
  phoneNumber: "",
  errors: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_AGE:
      return { ...state, age: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case SET_ERRORS:
      return { ...state, errors: action.payload };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
