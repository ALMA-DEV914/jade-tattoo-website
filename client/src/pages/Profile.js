import React from "react";
import { Link, useParams } from "react-router-dom";

import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";
import FriendList from "../components/FriendsList";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import Footer from "../components/Footer";

const Profile = (props) => {
  const { username: userParam } = useParams();
  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Link to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <div className="container">
      <div>
        <div className="text-center mt-4">
        <h2 className="text-secondary p-2 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>
      </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <ThoughtList
              thoughts={user.thoughts}
              title={`${user.username}'s reviews...`}
            />
          </div>
          <div className="col-12 col-lg-3 ">
            {userParam && (
              <button className="btn bg-success w-100" onClick={handleClick}>
                Add Friend
              </button>
            )}
            <FriendList
              username={user.username}
              friendCount={user.friendCount}
              friends={user.friends}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">{!userParam && <ThoughtForm />}</div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
