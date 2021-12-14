import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {MdPets, MdCrueltyFree} from 'react-icons/md';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Cruelty free
            <MdCrueltyFree/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Home
                <i class="fas fa-home    "></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/FirstPage" activeClassName="active" className="nav-links" onClick={handleClick}>
                First
                <i class="fas fa-images"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/SecondPage" activeClassName="active" className="nav-links" onClick={handleClick}>
                Second
                <MdPets/>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-arrow-up" : "fas fa-arrow-down"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
