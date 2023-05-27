import React from 'react';
import Footer from '../components/Footer';

function Booking() {
  return (
    <>
    <div className="container calendar">
            <div className="row">
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Questions?  Book an Appointment</h2>
                        </div>
                        <form>
                         
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <div className="form-group">
                                        <label className="control-label" for="name">Name</label>
                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md"/>
                                    </div>
                                </div>
                              
                                <div className="col-md-6 mb-2">
                                    <div className="form-group">
                                        <label className="control-label" for="email">Email</label>
                                        <input id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md"/>
                                    </div>
                                </div>
                              
                                <div className="col-md-6 mb-2">
                                    <div className="form-group">
                                        <label className="control-label" for="date">Preferred Date</label>
                                        <input id="date" name="date" type="text" placeholder="Preferred Date" className="form-control input-md"/>
                                    </div>
                                </div>
                              
                                <div className="col-md-6 mb-2">
                                    <div className="form-group">
                                        <label className="control-label" for="time">Preferred Time</label>
                                        <select id="time" name="time" className="form-control">
                                            <option value="8:00 to 9:00">8:00 to 9:00</option>
                                            <option value="9:00 to 10:00">9:00 to 10:00</option>
                                            <option value="10:00 to 1:00">10:00 to 1:00</option>
                                            <option value="1:00 to 2:00">1:00 to 2:00</option>
                                            <option value="2:00 to 3:00">2:00 to 3:00</option>
                                            <option value="3:00 to 5:00">3:00 to 5:00</option>
                                        </select>
                                    </div>
                                </div>
                               
                                <div className="col-md-12 mb-4">
                                    <div className="form-group ">
                                        <label className="control-label" for="appointmentfor">Appointment For</label>
                                        <select id="appointmentfor" name="appointmentfor" className="form-control">
                                            <option value="Service#1">Service#1</option>
                                            <option value="Service#2">Service#2</option>
                                            <option value="Service#3">Service#3</option>
                                            <option value="Service#4">Service#4</option>
                                        </select>
                                    </div>
                                </div>
                              
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-default submit">Make An Appointment</button>
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Why Appointment with Us?</h2>
                        </div>
                        <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h5 className="feature-title">24/7 Hours Available</h5>
                                <div className="feature-content">
                                    <p>- We are available 24 hours to answers your queries and questions. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h5 className="feature-title">Experienced Staff Available</h5>
                                <div className="feature-content">
                                    <p>- We have years of experience on our expertise, and we understand and prioritize customers satisfaction. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h5 className="feature-title">Low Price & Fees</h5>
                                <div className="feature-content">
                                    <p> - We charge according to your budget as we understand that you have some daily important expenses too. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
  )
}

export default Booking
