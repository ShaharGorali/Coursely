import React, { useState, useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { CourseContext } from "./../CourseContext";
import Swal from "sweetalert2";

const Courses = () => {
  const { userID, refresh, setRefresh, myProfile, courseRef, handleClick2 } = useContext(CourseContext);
  const [course, setCourse] = useState(0);
  const takeCourse = async (num) => {
    try {
      const token = localStorage.getItem("token");
      if (token == null) {
        alert("Need to login to take a course");
      }
      const obj = { subject: num, user_id: userID };
      const result = await axios.post("http://localhost:4000/courses", obj);
      myProfile();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Course added succesfully",
        showConfirmButton: false,
        timer: 1800,
        background: 'black'
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  const courseIntrod = () => {
    if (course == 1) {
      return `Our esteemed development courses portal offers a plethora of
      educational opportunities, including our highly sought-after full
      stack development program. This comprehensive curriculum imparts a
      holistic understanding of the web development process, from
      front-end design to back-end engineering, equipping students with
      the skills to become well-rounded developers.`;
    }
    if (course == 2) {
      return `Our distinguished development courses portal offers a plethora of
      educational opportunities, including our highly sought-after
      Python programming course. This program is designed to empower
      students with the knowledge and proficiency to harness the power
      of the Python language, enabling them to create complex and
      sophisticated software applications.`;
    }
    if (course == 3) {
      return `Our distinguished development courses portal offers a plethora of
      educational opportunities, including our highly sought-after
      DevOps program. This curriculum is tailored to impart a
      comprehensive understanding of the principles and tools used to
      manage and automate the software development lifecycle, equipping
      students with the capability to build and maintain
      high-performing, reliable systems.`;
    }
  };
  return (
    <div ref={courseRef} id="coursesComp" className="courseSpace">
      <h2 id="cHead" className="partHeader">
        Review our Courses
      </h2>
      <div className="coursesContent">
        <div className="imgContent">
          <TypeAnimation
            className="coursesType"
            sequence={[
              3000,
              "Full-Stack",
              () => setCourse(1),
              () => courseIntrod(),
              15000,
              "Python",
              () => setCourse(2),
              () => courseIntrod(),
              15000,
              "DevOps",
              () => setCourse(3),
              () => courseIntrod(),
              15000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "60px",
              fontFamily: `'Turret Road', cursive`,
              backgroundColor: "black",
            }}
          />
          <p className="courseIntrod">{courseIntrod()}</p>
          <img
            id="computerImg"
            src="https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-technology-background-binary-computer-code-vector-illustration-image_458703.jpg"
            alt="Computer (IMG)"
          />
        </div>
        <div className="coursesBtnsSpace">
          <div className="takeCourseBtns">
            <button className="coursesBtns" onClick={() => takeCourse(1)}>
              Register for the Full-Stack course
            </button>
            <button className="coursesBtns" onClick={() => takeCourse(3)}>
              Register for the Python course
            </button>
            <button className="coursesBtns" onClick={() => takeCourse(2)}>
              Register for the DevOps course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
