import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/images/about.jpg";

function About() {

  return (
    <div className="container d-flex">
      <div className="row">
        <div className="col p-2">
          <img src={pic} alt="tattoo-hand" width="100%" />
        </div>

        <div className="col p-4 mt-6">
          <h1>About Us</h1>
          <p>
            {" "}
            Jade Tattoo is a small start up business. Being passionate in arts
            and design, he found ways on how to apply this skills. It is located
            in small town at Brgy. Maraska Roxas, oriental Mindoro. The most
            inspiring thing about him is that he is a self-taught designer.
          </p>

          <br></br>
          <Link to="/calendar">
          <button type="button" className="bg-success">
            Reserve your sit
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
