import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./form.css";
import {
  setName,
  setAge,
  setEmail,
  setPhoneNumber,
  setErrors,
  resetForm,
} from "../../store/actions/form-action";

const Form = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const email = useSelector((state) => state.email);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const errors = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!age) {
      errors.age = "Age is required";
    } else if (isNaN(age)) {
      errors.age = "Age must be a number";
    } else if (+age < 0 || +age > 120) {
      errors.age = "Age must be between 0 and 120";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (isNaN(phoneNumber)) {
      errors.phoneNumber = "Phone number must be a number";
    } else if (phoneNumber.split("").length !== 10) {
      errors.phoneNumber = "Phone number must be of 10 digits";
    }
    if (Object.keys(errors).length > 0) {
      dispatch(setErrors(errors));
    } else {
      dispatch(setErrors({}));
      //Write your code for what do u want on sumbitting it,
      //we can dispatch an action which takes the payload and call an api call.
      //We need to use middleware like redux-thunk for an api call

      console.log("Success");
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return (
    <div className="user-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          {errors.name && <div className="error">*{errors.name}</div>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => dispatch(setAge(e.target.value))}
          />
          {errors.age && <div className="error">*{errors.age}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          {errors.email && <div className="error">*{errors.email}</div>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
          />
          {errors.phoneNumber && (
            <div className="error">*{errors.phoneNumber}</div>
          )}
        </div>
        <div className="form-button-container">
          <button className="form-button form-submit-button" type="submit">
            Submit
          </button>
          <button
            className=" form-button form-reset-button"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
