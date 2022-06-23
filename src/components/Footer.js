import React from "react";
import hero from "../assets/images/hero-logo.jpeg";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark m-2 p-2 text-white">
        <div className="container">
      <div className="row">
        <div className="col">
          <h2>About</h2>
          <p>
            Jade Tattoo is a small start up business. Being passionate in arts
            and design, he found ways on how to apply this skills. It is located
            in small town at Brgy. Maraska Roxas, oriental Mindoro. The most
            inspiring thing about him is that he is a self-taught designer.{" "}
          </p>
        </div>
        <div className="col">
          <h2>Facebook</h2>
          <div className="box flex">
            <img src={hero} alt="" width="120px" />
            <p>Contact me in messenger</p>
          </div>
          <h2>Contact Us</h2>
          <i className="fa fa-phone"></i>
          <label>Call +63 0906 937 6165</label>
          <br></br>
          <i class="fa fa-envelope"></i>
          <label>jade123@gmail.com</label>
        </div>
        <div className="col">
          <h2>Location</h2>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Bargy.%20Maraska%20Roxas%20Oriental%20mindoro%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="location"
              ></iframe>
              <a href="https://www.embedgooglemap.net">Location</a>
              <a href="https://fmovies-online.net">Search</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <p className="text-center p-1">
        Copyright (c) 2021 Copyright Holder All Rights Reserved | This template
        is made by <i class="fa fa-heart"></i>Alma Aungon Braun
      </p>
    </div>
  );
};

export default Footer;
