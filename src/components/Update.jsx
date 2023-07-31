import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";
const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (id && users) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="newUser">UPDATE USER</h1>
      <div>
        <input
          className="formIP"
          name="name"
          placeholder="Name..."
          value={updateData && updateData.name}
          onChange={newData}
        />{" "}
        <br />
        <input
          className="formIP"
          name="email"
          placeholder="Email..."
          value={updateData && updateData.email}
          onChange={newData}
        />
        <br />
        <input
          className="formIP"
          name="age"
          placeholder="Age..."
          value={updateData && updateData.age}
          onChange={newData}
        />
        <br />
        <div class="wrapper">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={updateData && updateData.gender === "Male"}
            id="option-1"
            onChange={newData}
          />
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={updateData && updateData.gender === "Female"}
            id="option-2"
            onChange={newData}
          />
          <label for="option-1" class="option option-1">
            <div class="dot"></div>
            <span>Male</span>
          </label>
          <label for="option-2" class="option option-2">
            <div class="dot"></div>
            <span>Female</span>
          </label>
        </div>
      </div>
      <button className="subButton">Update</button>
    </form>
  );
};

export default Update;
