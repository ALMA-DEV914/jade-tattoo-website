import React from 'react'
import pic from "../assets/images/hero-logo.jpeg";

function About() {
  return (
    <div class="container d-flex">
        <div class="row">
          <div class="col p-2">
            <img src={pic} alt="tattoo-hand" width="100%"/>
          </div>
    
        <div class="col p-4 mt-6">
          <h1>About Us</h1>
          <p> Jade Tattoo is a small start up business. Being passionate in arts and design, he found ways on how to apply this skills. It is located in small town at Brgy. Maraska Roxas, oriental Mindoro. The most inspiring thing about him is that he is a self-taught designer.</p>
          <button type="button" className='bg-success'>Read More</button>
        </div>
        </div>
      </div>
    
  )
}

export default About
