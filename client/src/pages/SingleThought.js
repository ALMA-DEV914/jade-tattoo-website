import React from 'react';
import { useParams } from 'react-router-dom';

import ReactionList from '../components/ReactionList';
import ReactionForm from '../components/ReactionForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';

const SingleThought = (props) => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-3 p-2'>
      <div className="col-lg-8 mb-3">
        <div className="">
          <span style={{fontWeight: 700 }} className="text-dark">
           <h4>{thought.username}</h4>
          </span>{' '} <span className='text-info'>feedback on {thought.createdAt}</span>
        </div>
        
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
        </div>
     
      <div className='col-lg-10 mx-auto'>
      {thought.reactionCount > 0 && (
        <ReactionList reactions={thought.reactions} />
      )}
      </div>
      {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />}
    </div>
    
  );
};

export default SingleThought;
