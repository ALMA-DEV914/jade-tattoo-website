import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_THOUGHT } from "../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../utils/queries";

const BookingForm = () => {
  const [thoughtText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
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
      await addThought({
        variables: { thoughtText },
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
      <div class="ae-emd-cal" data-calendar="Fd272527" data-configure="true" data-title="" data-title-show="true" data-today="true" data-datenav="true" data-date="true" data-monthweektoggle="true" data-subscribebtn="true" data-swimonth="true" data-swiweek="true" data-swischedule="true" data-timezone="true" data-logo="true" data-defaultview="month" data-firstday="1" data-datetimeformat="1"></div> 
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
          value={thoughtText}
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
