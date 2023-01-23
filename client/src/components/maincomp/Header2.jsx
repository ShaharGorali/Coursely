import React, { useState, useEffect, useContext } from "react";
import icon from "../../img/icon.png";
import jwtDecode from "jwt-decode";
import { CourseContext } from "./../../CourseContext";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const { name, setName, refresh, myProfile, registered } =
    useContext(CourseContext);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    myProfile();
  };
  useEffect(() => {}, [refresh]);
  return (
    <div className="headerSpace">
      <div className="headerItemsSpace">
        <div className="logoSpace">
          <NavLink to={"/"} id="logo1">
            Coursely
          </NavLink>
        </div>
        </div>
      </div>
  );
};

export default Header;
