//import React
import React from "react";
import { Link } from "react-router-dom";
import {SiArtstation} from 'react-icons/si'
//function to create Nav components
const Nav = () => {
  //render the page section
  return (
    <div className="container-fluid  p-2 justify-content-between">
      <div className="col">
       <h1 className="text-white"><SiArtstation id="logo"/> Tattoo@Jade </h1>
       </div>
       <div className="col p-2">
       <nav className="text-right">
          <Link to="/">
            <button className="p-1 m-1  navActive ">HOME</button>
          </Link>

          <Link to="/gallery">
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
