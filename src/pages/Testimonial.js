import React from 'react'

function Testimonial() {
  return (
   
      <section className="customer" id="testimonials">
    <div className="container">
      <h2>What Says Our Client</h2>
      <p>We sincerely thank all of our amazing and loyal clients who have taken the time to leave us so many wonderful reviews online!  We apologize that Yelp’s new algorithm has recently filtered out 75% of these legitimate reviews, and we kindly ask that if you would like to leave us a review, please do so at our Google page instead (where your opinion will actually remain visible!)</p>
      <div className="items grid">
        <div className="box">
          <div className="para">
            <p>Just had my first tattoo with Jade. I'm so glad I trusted him, he had so much patience and walked me through the process. I loved how detailed he was and asked me my thoughts along the way. Definitely returning to him, plus his a Disney fan like me!</p>
          </div>
          <div className="image flex ">
            <div className="img">
              <img src="images/noAvatar.png" alt=''/>
            </div>
            <div className="text">
              <h3>Jade Garcia</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="para">
            <p>Went to Jade, and he did a spectaclular job! Friendly and professional. He was very eager to get the tattoo done, and he shown amazing patience, detail, and effort i to my tattoo. Im in love with it, would definitely recommend him to anyone and I'd definitely go back to him in the future!</p>
          </div>
          <div className="image flex ">
            <div className="img">
              <img src="images/noAvatar.png" alt=''/>
            </div>
            <div className="text">
              <h3>Jen Faner</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Testimonial
