import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "./../CourseContext";
import Header2 from "./maincomp/Header2";
import Swal from "sweetalert2";

const Signup = () => {
  const [data, setData] = useState({});
  const { registered, setRegistered, myProfile } = useContext(CourseContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/signup", data);
      localStorage.setItem("token", result.headers["x-auth-token"]);
      myProfile();
      setRegistered(true)
      navigate("/");
    } catch (err) {
      Swal.fire("Email already exists");
    }
  };
  return (
    <div className="signupSpace">
      <Header2 />
      <h2 className="partHeader">Become a Coursely member</h2>
      <div className="formSpace">
        <form onSubmit={handleSubmit} className="signupForm" action="email">
          <label htmlFor="email">Username</label>
          <input
            placeholder="Enter your username"
            type="text"
            name="username"
            id="usernameIn"
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="emailIn"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="passwordIn"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button className="formBtn" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
