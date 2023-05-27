import React, { useState } from 'react';
import { SiArtstation } from "react-icons/si";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
<header className="container-fluid bg-secondary py-2">
    <nav className="container navbar navbar-expand-lg justify-space-between rounded">
    <div className='col-8'>
      <a className="navbar-brand font-weight-bolder" href="/">
      <h1 className="text-white mt-4">
          <SiArtstation id="logo" /> Tattoo@Jade{" "}
        </h1>
      </a>
      </div>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"><FaBars className='nav-icon '/></span>
      </button>
    
      <div className ={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
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
      </div>
    </nav>
    </header>
  );
}

export default TopNav;