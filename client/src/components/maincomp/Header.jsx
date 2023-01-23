import React, { useState, useEffect, useContext } from "react";
import icon from "../../img/icon.png";
import { CourseContext } from "./../../CourseContext";
const Header = () => {
  const {
    name,
    refresh,
    myProfile,
    registered,
    handleClick,
    handleClick1,
    handleClick2,
    handleClick3,
    
  } = useContext(CourseContext);
  const logOut = () => {
    localStorage.removeItem("token");
    myProfile();
  };
  useEffect(() => {
    myProfile();
  }, [refresh]);
  return (
    <div className="headerSpace">
      <div className="headerItemsSpace">
        <div className="logoSpace">
          <a href="#welcomeComp" id="logo">
            Coursely
          </a>
          <img id="headerIcon" src={icon} alt="icon" />
        </div>
        <div className="headerItem">
          <a onClick={handleClick1} className="headerItem">
            Review courses
          </a>
          <a onClick={handleClick2} className="headerItem">
            Our teachers
          </a>
          <a onClick={handleClick3} className="headerItem">
            Contact
          </a>
          {registered ? (
            <a onClick={handleClick} className="headerItem">
              To profile
            </a>
          ) : (
            <a onClick={handleClick} className="headerItem">
              Sign in
            </a>
          )}
        </div>
        <div className="userBtn">
          <p className="headerName">{name}</p>
          {registered ? (
            <button onClick={() => logOut()} className="headerItem">
              Log out
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
