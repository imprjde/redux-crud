import React from "react";
import "./View.css";
import { useSelector } from "react-redux";

const View = ({ id, setShowModal }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="clsbttn">
          <button className="btn" onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
        <div className="content">
          <h3>Name: {singleUser[0].name} </h3>
          <h3>Email: {singleUser[0].email}</h3>
          <h3>Age: {singleUser[0].age}</h3>
          <h3>Gender: {singleUser[0].gender}</h3>
        </div>
      </div>
    </div>
  );
};

export default View;
