import React from "react";
import { Link } from "react-router-dom";
import { SiArtstation } from "react-icons/si";
import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="container-fluid bg-secondary py-2">
      <div className="container d-flex justify-content-between nav">
        <h1 className="text-white">
          <SiArtstation id="logo" /> Tattoo@Jade{" "}
        </h1>

        <nav className="text-center navItem">
          {Auth.loggedIn() ? (
            <>
              <Link to="/">
                {" "}
                <button className="p-1 m-1  navActive">HOME</button>
              </Link>
              <Link to="/gallery">
                {" "}
                <button className="p-1 m-1  navActive">GALLERY</button>
              </Link>
              <Link to="/reviews">
                {" "}
                <button className="p-1 m-1  navActive">TESTIMONIAL</button>
              </Link>
              <Link to="/profile">
                <button className="p-1 m-1  navActive">PROFILE</button>
              </Link>
              <a href="/" onClick={logout}>
                <button className="p-1 m-1  navActive">LOGOUT</button>
              </a>
            </>
          ) : (
            <>
              <Link to="/">
                {" "}
                <button className="p-1 m-1  navActive">HOME</button>
              </Link>
              <Link to="/gallery">
                {" "}
                <button className="p-1 m-1  navActive">GALLERY</button>
              </Link>
              <Link to="/login">
                {" "}
                <button className="p-1 m-1  navActive">LOGIN</button>
              </Link>
              <Link to="/signup">
                {" "}
                <button className="p-1 m-1  navActive">SINGUP</button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
