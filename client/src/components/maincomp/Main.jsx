import React, { useState, useEffect, useContext } from "react";
import Profile from "../Profile";
import Welcome from "../Welcome";
import Signin from "./../Signin";
import Courses from "../Courses";
import Teachers from "../Teachers";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { CourseContext } from "./../../CourseContext";
import Header from './Header';

const Main = () => {
  const {registered, refresh, setRefresh, myProfile } =
    useContext(CourseContext);
  useEffect(() => {
    myProfile();
  }, [refresh]);
  return (
    <div className="mainSpace">
      <Header />
      <Welcome />
      {registered ? <Profile /> : <Signin />}
      <Courses />
      <Teachers />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Main;
