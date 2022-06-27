import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import FriendList from '../components/FriendsList';

const Reviews = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="container flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`row ${loggedIn && 'col-lg-12'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
          <div className='col-12 mb-3 col-lg-8'>
            <ThoughtList
              thoughts={thoughts}
              title="Some Reviews from our Customers"
            />
            </div>
          )}
     
     <div className='col-12 col-lg-3  mb-3'>
        {loggedIn && userData ? (
         <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
        
        ) : null}
        </div>
      </div>
      </div>
    </main>
  );
};

export default Reviews;
