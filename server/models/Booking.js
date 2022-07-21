const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookingSchema = new Schema(
  {
    bookingText: {
      type: String,
      required: 'You need to reserved your sit!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
