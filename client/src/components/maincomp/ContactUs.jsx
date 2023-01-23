import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CourseContext } from "./../../CourseContext";


const ContactUs = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { registered, contactRef } = useContext(CourseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
    if(registered){
      navigate("/");
      console.log(data);
      Swal.fire('Thank you! youll get your an answers soon as possible');
    }else{
      Swal.fire('Must be registered for using this feature');
    }
  };
  return (
    <div ref={contactRef} id="contact" className="contactSpace">
      <div className="contacting">
        <h2 className="partHeader">Contact</h2>
        <p className="contactInfo">
          Welcome to the Coursely contact page! We appreciate your interest in
          our development courses. If you have any questions or feedback, please
          feel free to reach out to us using the form below. Our team will get
          back to you as soon as possible. Thank you for choosing
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="contactForm" action="">
        <label htmlFor="contact">How can we assist you?</label>
        <input
          onChange={(e) => setData({ data: e.target.value })}
          placeholder="Write here the reason you want to contact"
          type="text"
          name="contact"
          id="contactIn"
        />
        <button
          // style={{ width: "60%", backgroundColor: "green" }}
          className="nextBtn"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
