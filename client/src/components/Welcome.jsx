import React, {  useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { CourseContext } from "./../CourseContext";
const Welcome = () => {
  const { handleClick, registered } = useContext(CourseContext);
  return (
    <div id="welcomeComp" className="welcomeSpace">
      <div className="welcomeContent">
        <h2 id="welcomeHeader" className="partHeader">Welcome to Coursely!</h2>
        <div className="imgContent">
          <TypeAnimation
            id="intro"
            sequence={[
              2000,
              "one of the most popular and reputable sites in Israel.",
              3000,
              "We offer a wide range of courses for individuals and organizations looking to improve their skills and advance their careers.",
              4000,
              " Our site is easy to use and offers a diverse selection of expert-led classes.",
              4000,
              "Whether you are just starting out or a seasoned professional, we have a course that fits your needs.",
              () => {
                console.log("Done typing!");
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "green",
              textAlign: "center",
              fontSize: "30px",
              fontFamily: `'Source Code Pro', monospace`,
            }}
          />
          <img
            id="computerImg"
            src="https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-technology-background-binary-computer-code-vector-illustration-image_458703.jpg"
            alt="Computer (IMG)"
          />
        </div>
        {registered?<button onClick={handleClick} className="nextBtn">
          My profile
        </button>:<button onClick={handleClick} className="nextBtn">
          Register
        </button>}
      </div>
    </div>
  );
};

export default Welcome;
