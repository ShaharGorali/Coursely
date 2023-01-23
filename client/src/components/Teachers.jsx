import React, { useState, useContext } from "react";
import { CourseContext } from "./../CourseContext";


const Teachers = () => {
  const [teacher, setTeacher] = useState();
  const { teacherRef } = useContext(CourseContext);

  return (
    <div ref={teacherRef} id="teachersComp" className="teacherSpace">
      <div className="teacherImgSpace">
        <h2 className="partHeader" id="teacherTitle">
          Our Teachers
        </h2>
        <div className="dispTeacher">
          <div className="teacherInfo">
            <img
              className="teacher"
              src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
              alt=""
            />
            <p className="tName">Bill Gates</p>
            <p className="tIntrod">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
              assumenda.
            </p>
            <p className="coursesTeaching">Courses teaching:</p>
            <p className="tIntrod">Full-Stack, Python</p>
          </div>
          <div className="teacherInfo">
            <img
              className="teacher"
              src="https://scontent.ftlv18-1.fna.fbcdn.net/v/t39.30808-6/267716238_1558302381200076_8909005066456966409_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f5W3fjrFI94AX_i0tFP&_nc_ht=scontent.ftlv18-1.fna&oh=00_AfBRNj7Gg8c0ft6nuX51ruclSTCTxW_GX9wit3RgJu90-g&oe=63D30074"
              alt=""
            />
            <p className="tName">Hotahifa Zoubi</p>
            <p className="tIntrod">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
              assumenda.
            </p>
            <p className="coursesTeaching">Courses teaching:</p>
            <p className="tIntrod">Full-Stack, DevOps</p>
          </div>
          <div className="teacherInfo">
            <img
              className="teacher"
              src="https://www.planetsport.com/image-library/square/500/d/david-beckham-england-profile.jpg"
              alt=""
            />
            <p className="tName">David Beckham</p>
            <p className="tIntrod">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
              assumenda.
            </p>
            <p className="coursesTeaching">Courses teaching:</p>
            <p className="tIntrod">DevOps, Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
