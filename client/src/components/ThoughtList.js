import React from 'react';
import { Link } from 'react-router-dom';


const ThoughtList = ({ thoughts, title}) => {
  if (!thoughts) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
  <>
    <div className='container'>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
              <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt="profile" id='profile'></img>
              <Link
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
                className="text-info"
              >
                {thought.username}
              </Link>{' '}
             feedback on {thought.createdAt}
            </p>
            <div className="card-body">
            <p>{thought.thoughtText}</p>
              <Link to={`/thought/${thought._id}`}>
                <p className="mb-0">
                  Comments: {thought.reactionCount} || Click to{' '}
                  {thought.reactionCount ? 'see' : 'add'} a comments!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default ThoughtList;
