import React, { useState, useEffect } from "react";
import "./DisplayData.css";
import View from "./View";
import { useSelector, useDispatch } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import { deleteUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";

const DisplayData = () => {
  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [radioData, setRadioData] = useState("");
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div class="main">
      <div className="filterDiv">
        <h2 className="filterH">Apply Filter</h2>
        <div class="radio-list">
          <div class="radio-item">
            <input
              name="radio"
              id="radio1"
              type="radio"
              onChange={(e) => setRadioData("")}
              checked={radioData === ""}
            />
            <label for="radio1">All</label>
          </div>
          <div class="radio-item">
            <input
              name="radio"
              id="radio2"
              type="radio"
              value="Male"
              onChange={(e) => setRadioData(e.target.value)}
              checked={radioData === "Male"}
            />
            <label for="radio2">Male</label>
          </div>
          <div class="radio-item">
            <input
              name="radio"
              id="radio3"
              type="radio"
              value="Female"
              onChange={(e) => setRadioData(e.target.value)}
              checked={radioData === "Female"}
            />
            <label for="radio3">Female</label>
          </div>
        </div>
      </div>
      {showModal && <View id={id} setShowModal={setShowModal} />}
      <h1 class="h11">All USERS</h1>
      {users &&
        Array.isArray(users) &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if (radioData === "") {
              return ele;
            } else if (radioData === "Male") {
              return ele.gender === "Male";
            } else if (radioData === "Female") {
              return ele.gender === "Female";
            }
          })
          .map((users) => {
            return (
              <div key={users.id} class="displayDiv">
                <h4 class="h33">Name: {users.name}</h4>
                <h4 class="h33">Email: {users.email}</h4>
                <h4 class="h33">
                  Gender: {users.gender} ( {users.age} )
                </h4>
                <div class="bttnDivv">
                  <button
                    className="btn1"
                    onClick={() => {
                      setId(users.id);
                      setShowModal(true);
                    }}
                  >
                    View
                  </button>
                  <Link to={`/update/${users.id}`}>
                    <button className="btn2">Edit</button>
                  </Link>
                  <button
                    to=""
                    className="btn3"
                    onClick={() => dispatch(deleteUser(users.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default DisplayData;
