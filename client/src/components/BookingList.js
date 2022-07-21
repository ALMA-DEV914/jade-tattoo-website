import React from "react";
import { Link } from "react-router-dom";

const BookingList = ({bookings }) => {
  if (!bookings) {
    return <h3>No Reservation Yet</h3>;
  }

  return (
    <div className="container">
      <h3>Customers Reservation </h3>
      {bookings &&
        bookings.map((booking) => (
          <div key={booking._id} className="card mb-3">
            <p className="card-header">
              <img
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt="profile"
                id="profile"
              ></img>
               <Link
                to={`/profile/${booking.username}`}
                style={{ fontWeight: 700 }}
                className="text-info"
              >
              {booking.username}
              </Link>{' '} reserve her/his
              sit on {booking.createdAt}
            </p>
            <div className="card-body">
              <p>{booking.bookingText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookingList;
