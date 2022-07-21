import React from 'react';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC, QUERY_BOOKINGS} from '../utils/queries';


const Booking = () => {
  const { loading, data } = useQuery(QUERY_BOOKINGS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const bookings = data?.bookings || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="container flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <BookingForm />
          </div>
        )}
        <div className={`row ${loggedIn && 'col-lg-12'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
          <div className='col-12 mb-3 col-lg-8'>
            <BookingList
              bookings={bookings}
            />
            </div>
          )}
      </div>
      </div>
    </main>
  );
};

export default Booking;
