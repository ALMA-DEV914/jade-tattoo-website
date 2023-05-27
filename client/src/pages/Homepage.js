import React from "react";
import hero from "../assets/images/t-home.jpg";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/studs.png";
import icon2 from "../assets/images/piercing (2).png";
import icon4 from "../assets/images/piercing.png";
import About from "../components/About";
import Footer from "../components/Footer";
import moment from 'moment'
var date = moment().format("MMMM Do YYYY - h:mm:ss a");


const Homepage = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container d-flex text-white">
          <div className="row">
            <div className="col mt-4">
              <h2>Welcome to the Tattoos Hub.</h2>
              <p>{date}</p>
              <br></br>
              <p>
                The tattoo is no longer quite the symbol of rebellion and
                subculture it once was. Tattooing is one of the earliest visual
                art forms and has served as a means of self-expression for
                thousands of years. The traditional style, also called old
                school tattoo style, American traditional tattoo style, classic
                tattoo style or Western traditional tattoo style, is known for
                its bold lines, bright colors, and iconic designs like roses,
                anchors, and gorgeous lady heads.
              </p>
              <br></br>
              <Link to="/reviews">
                <button className="bg-success">
                  Check what our customers says
                </button>
              </Link>
            </div>
            <div className="col mt-2">
              <img src={hero} alt="hero-logo" width="100%" id="home-hero" />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container text-center mt-4">
        <h1>What We Do</h1>
        <div className="row">
          <div className="col text-center">
            <img src={icon1} alt="Freepik" width="80px" className="icons" />
            <h2>Tattooing</h2>
            <p>
              {" "}
              If you want a true piece of artwork displayed on your body - run,
              don't walk, to Jade Tattoo HotSpot! A custom design will have to
              book several months in advance. It is easy to book the initial
              consult where we will listen carefully to your design ideas and
              ask you to provide reference materials.
            </p>
          </div>
          <div className="col text-center">
            <img src={icon2} alt="Freepik" width="80px" />
            <h2>Piercing</h2>
            <p>
              {" "}
              We also offer piercing and you just have to provide your materials
              needed. The cost of a body piercing varies depending on the
              location of the body being pierced, the type of piercing and the
              individual piercer.
            </p>
          </div>
          <div className="col text-center">
            <img src={icon4} alt="Freepik" width="80px" className="icons" />
            <h2>Tattoo Design </h2>
            <p>
              {" "}
              We have a brosure of design to choose from which you think you
              will be happy to put in your body. Otherwise we welcome a custom
              design where you will provide your own photo or sketch.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="about">
      <About />
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
