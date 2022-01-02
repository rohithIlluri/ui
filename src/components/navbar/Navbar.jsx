import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="BA__navbar">
      <div className="BA__navbar-links">
        <div className="BA__navbar-links_container">
        <p><a href="/BAChain">BAChain</a></p>
          <p><a href="/projects">Projects</a></p>
          <p><a href="/howitworks">How it works</a></p>
          <p><a href="/technology">Technology</a></p>
          <p><a href="/security">Security</a></p>
         
        </div>
      </div>
      <div className="BA__navbar-sign">
        <p>Sign in</p>
        <button><a href="/signup">Sign up</a></button>
      </div>

      <div className="BA__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="BA__navbar-menu_container scale-up-center">
          <div className="BA__navbar-menu_container-links">
          <p><a href="#BAChain">BAChain</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#howitworks">How it works</a></p>
          <p><a href="#technology">Technology</a></p>
          <p><a href="#security">Security</a></p>
          </div>
          <div className="BA__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;