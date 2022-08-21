import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
import pic5 from "../assets/images/pic5.png";
import pic6 from "../assets/images/tattoo11.jpg";
import pic7 from "../assets/images/pic7.png";
import pic8 from "../assets/images/tatoo8.png";
import pic9 from "../assets/images/pic9.png";
import pic10 from "../assets/images/pic10.png";
import pic11 from "../assets/images/pic11.png";
import pic12 from "../assets/images/pic12.png";
import pic13 from "../assets/images/tatoo14.png";
import pic14 from "../assets/images/tatoo16.png";
import pic15 from "../assets/images/tattoo.jpg";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <div className="container-fluid mt-4 mb-4">
        <h1 className="text-dark text-center p-2">Welcome to the Gallery</h1>
        <p className="text-dark text-center">
          Sample of Jade's work and design.
        </p>
        <div className="container d-flex">
          <div id="row">
            <div id="col">
              <img src={pic14} alt="" width="100%" />
              <img src={pic5} alt="" width="100%" />
              <img src={pic1} alt="" width="100%" />
            </div>
            <div id="col">
              <img src={pic2} alt="" width="100%" />
              <img src={pic6} alt="" width="100%" />
              <img src={pic11} alt="" width="100%" />
      
              <img src={pic7} alt="" width="100%" />
            </div>
            <div id="col">
              <img src={pic9} alt="" width="100%" />
              <img src={pic3} alt="" width="100%" />
              <img src={pic10} alt="" width="100%" />
              <img src={pic12} alt="" width="100%" />
            </div>
            <div id="col">
              <img src={pic15} alt="" width="100%" />
              <img src={pic13} alt="" width="100%" />
              <img src={pic4} alt="" width="100%" />
              <img src={pic8} alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
