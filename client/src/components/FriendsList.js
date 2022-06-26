import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{username}, make some friends!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5><br></br>
      {friends.map(friend => (
        
          <Link key={friend._id} to={`/profile/${friend.username}`}><button className="btn w-100 bg-info mb-2">{friend.username}</button></Link>
        
      ))}
    </div>
  );
};

export default FriendList;
