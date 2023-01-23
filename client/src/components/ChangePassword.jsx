import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "./../CourseContext";
import Header2 from "./maincomp/Header2";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [data, setData] = useState();
  const { registered, setRegistered, myProfile, userID } =
    useContext(CourseContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = userID;
    const obj = { id: id, password: data };
    console.log(obj);
    try {
      const result = await axios.put(`http://localhost:4000/signup`, obj);
      navigate("/");
    } catch (err) {
      Swal.fire(err.message);
    }
  };
  return (
    <div className="signupSpace">
      <Header2 />
      <h2 className="partHeader">Change password</h2>
      <div className="formSpace">
        <form onSubmit={handleSubmit} className="signupForm" action="email">
          <label htmlFor="password">New password</label>
          <input
            placeholder="Enter your new password"
            type="password"
            name="password"
            id="passwordIn"
            onChange={(e) => setData(e.target.value)}
          />
          <button className="formBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
