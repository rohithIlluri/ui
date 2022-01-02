import React from 'react';
import logo from '../../assets/logo.png';
import './header.css';

const Header = () => (
  <div className="BA__header section__padding" id="home">
    <div className="BA__header-content">
      <h1 className="gradient__text">We make it easy for you to manage your company accesses</h1>
      <p>Thanks to our platform you will be able to digitalise the incorporation documents of your company and manage actions in your company based on the rules depicted in those.</p>
      
    </div>

    <div className="BA__header-image">
      <img src={logo} />
    </div>
  </div>
);

export default Header;