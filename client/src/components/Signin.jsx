import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { CourseContext } from "./../CourseContext";
import Swal from "sweetalert2";

const Signin = () => {
  const [data, setData] = useState({});
  const { registered, setRegistered, myProfile, profileRef, handleClick1 } =
    useContext(CourseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/register", data);
      localStorage.setItem("token", result.data);
      myProfile();
      setRegistered(true);
    } catch (err) {
      Swal.fire(err.response);
    }
  };
  return (
    <div ref={profileRef} id="signinComp" className="signinSpace">
      <h2 className="partHeader">Sign in</h2>
      <div className="formSpace">
        <form onSubmit={handleSubmit} className="signinForm" action="email">
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
          <button id="signinBtn" className="formBtn" type="submit">
            Continue
          </button>
          <div className="notMember">
            <p>Not a Coursely member yet?</p>
            <NavLink to={"/signup"}>
              <button className="formBtn2">Sign up</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
