import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUsers] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(createUser(user));
      navigate("/");
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  const validateForm = () => {
    return (
      user.name.trim() !== "" &&
      user.email.trim() !== "" &&
      user.age.trim() !== "" &&
      user.gender.trim() !== ""
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="newUser">CREATE NEW USER</h1>
      <div>
        <input
          className="formIP"
          name="name"
          placeholder="Name..."
          value={user.name}
          onChange={getUserData}
        />{" "}
        <br />
        <input
          className="formIP"
          name="email"
          placeholder="Email..."
          value={user.email}
          onChange={getUserData}
        />
        <br />
        <input
          className="formIP"
          name="age"
          placeholder="Age..."
          value={user.age}
          onChange={getUserData}
        />
        <br />
        <div className="wrapper">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="option-1"
            checked={user.gender === "Male"}
            onChange={getUserData}
          />
          <input
            type="radio"
            name="gender"
            value="Female"
            id="option-2"
            checked={user.gender === "Female"}
            onChange={getUserData}
          />
          <label htmlFor="option-1" className="option option-1">
            <div className="dot"></div>
            <span>Male</span>
          </label>
          <label htmlFor="option-2" className="option option-2">
            <div className="dot"></div>
            <span>Female</span>
          </label>
        </div>
      </div>
      <button className="subButton">Submit</button>
    </form>
  );
};

export default Form;
