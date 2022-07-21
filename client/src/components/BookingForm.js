import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_BOOKING } from "../utils/mutations";
import { QUERY_BOOKINGS, QUERY_ME} from "../utils/queries";

const BookingForm = () => {
  const [bookingText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addBooking, { error }] = useMutation(ADD_BOOKING, {
    update(cache, { data: { addBooking } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { bookings } = cache.readQuery({ query: QUERY_BOOKINGS });
        cache.writeQuery({
          query: QUERY_BOOKINGS,
          data: { bookings: [addBooking, ...bookings] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, bookings: [...me.bookings, addBooking] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addBooking({
        variables: { bookingText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <h1>Reserved your sit at your convenience</h1>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Message-Instruction: {characterCount} /280 characters 
        {error && <span className="ml-2"> Something went wrong...</span>}
      </p>
      <br></br>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave a message..."
          value={bookingText}
          className="form-input col-12 col-md-8 p-1"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 bg-success  col-md-2" type="submit" id="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
