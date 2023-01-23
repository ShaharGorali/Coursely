import { createContext, useState, useRef } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const CourseContext = createContext();
function CourseProvider(props) {
  const { children } = props;
  const [name, setName] = useState("Guest");
  const [myCourses, setMyCourses] = useState([]);
  const [userID, setUserID] = useState();
  const [registered, setRegistered] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const homeRef = useRef(null);
  const homeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const profileRef = useRef(null);
  const handleClick = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const courseRef = useRef(null);
  const handleClick1 = () => {
    courseRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const teacherRef = useRef(null);
  const handleClick2 = () => {
    teacherRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const contactRef = useRef(null);
  const handleClick3 = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const myProfile = async () => {
    const token = localStorage.getItem("token");
    if (token != null) {
      try {
        setRegistered(true);
        const decoded = jwtDecode(token);
        const username = decoded.user_name;
        const user_id = decoded.user_id;
        setName(username);
        setUserID(user_id);
        const result = await axios.get(
          `http://localhost:4000/courses/${user_id}`
        );
        setMyCourses(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (token == null) {
      setRegistered(false);
      setName("Guest");
    }
  };
  return (
    <CourseContext.Provider
      value={{
        setRefresh,
        myProfile,
        setRegistered,
        registered,
        refresh,
        name,
        userID,
        myCourses,
        handleClick,
        handleClick1,
        handleClick2,
        handleClick3,
        homeClick,
        homeRef,
        profileRef,
        courseRef,
        teacherRef,
        contactRef,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}
export default CourseProvider;
