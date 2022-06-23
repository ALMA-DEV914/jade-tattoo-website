//import React
import React from "react";
import { Link } from "react-router-dom";
import {SiArtstation} from 'react-icons/si'
//function to create Nav components
const Nav = () => {
  //render the page section
  return (
    <div className="container-fluid bg-dark p-2 d-flex">
      <div className="col-8">
       <h1 className="text-white"><SiArtstation id="logo"/> Tattoo@Jade </h1>
       </div>
       <div className="nav p-2">
       <nav className="text-right">
          <Link to="/">
            <button className="p-1 m-1  navActive ">Home</button>
          </Link>

          <Link to="/dashboard">
            <button className="p-1 m-1 navActive">GALLERY</button>
          </Link>

          <Link to="/profile">
            <button className="p-1 m-1 navActive">PROFILE</button>
          </Link>
      
          <Link to="/add-member">
            <button className="p-1 m-1  navActive">MEMBERS</button>
          </Link>
          <Link to="/logout">
            <button className="p-1 m-1  navActive">LOGOUT</button>
          </Link>
        
      </nav>
      </div>
      </div>
  );
};

export default Nav;
