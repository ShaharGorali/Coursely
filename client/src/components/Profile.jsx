import React from "react";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "./../CourseContext";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {
  const { name, myCourses, myProfile, profileRef, handleClick1 } =
    useContext(CourseContext);
  const genCyllabus = (s) => {
    if (s == 1) {
      return `- Front-end Development (HTML, CSS, JavaScript)
      - Back-end Development (Python, Node.js)
      - Database Management (SQL, MongoDB)
      - Web Frameworks (Django, Flask)
      - Deployment and Hosting
      - API Development
      - Authentication and Authorization
      - Version Control (Git)
      - Project Planning and Management`;
    }
    if (s == 2) {
      return `- Introduction to DevOps
      - Virtualization and Containerization (Docker)
      - Configuration Management 
      - Continuous Integration and Deployment (Jenkins, Travis CI)
      - Monitoring and Logging 
      - Cloud Infrastructure 
      - Security and Compliance
      - Performance and Scalability
      - Disaster Recovery and Business Continuity
      - Collaboration and Communication`;
    }
    if (s == 3) {
      return `- Introduction to Python
      - Data Types and Variables
      - Control Flow and Loops
      - Functions and modules
      - Object-Oriented Programming
      - File Handling and Serialization
      - Exception Handling
      - Standard Library
      - Third-Party Libraries
      - Debugging and Testing`;
    }
  };
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      // confirmButton: "btn btn-success",
      // cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  const cancelAttending = async (c) => {
    const id = c.course_id;
    console.log(c.course_id);
    try {
      const token = localStorage.getItem("token");
      if (token == null) {
        alert("Need to login to take a course");
      }
      const result = await axios.delete(`http://localhost:4000/courses/${id}`);
      myProfile();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div ref={profileRef} id="profileComp" className="profileSpace">
      <div className="myCourseSpace">
        <div>
          <h2 className="partHeader">Hello, {name}</h2>
        </div>
        <div className="coursesHeader">
          <p className="partHeader">Your Courses:</p>
        </div>
        <div className="myCourses">
          {myCourses.map((c) => {
            return (
              <div className="course">
                <p className="courseName">{c.course_name}</p>
                <button
                  onClick={() =>
                    Swal.fire(`${genCyllabus(c.subject)}`, {
                      background: "black",
                    })
                  }
                  id="courseBtns1"
                  className="courseBtns"
                >
                  Syllabus
                </button>
                <button
                  className="courseBtns"
                  onClick={() =>
                    swalWithBootstrapButtons
                      .fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, cancel!",
                        reverseButtons: true,
                        background: "black",
                      })
                      .then((result) => {
                        if (result.isConfirmed) {
                          swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your course attending has been canceled.",
                            cancelAttending(c),
                            "success"
                          );
                        } else if (
                          /* Read more about handling dismissals below */
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your course is still in your profile",
                            "error"
                          );
                        }
                      })
                  }
                >
                  Cancel attending
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={handleClick1} className="nextBtn">
          Review our Courses
        </button>
      </div>
    </div>
  );
};
export default Profile;
