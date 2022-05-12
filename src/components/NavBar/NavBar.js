import React from "react";

import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className='nav-container'>
        <div className='nav-logo'>Kick Shop</div>
        <ul className='nav-menu'>
          <li className='nav-item'>Collections</li>
          <li className='nav-item'>Men</li>
          <li className='nav-item'>Women</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
        </ul>
        <div className='nav-cart'>Cart</div>
      </nav>
    </>
  );
}

export default NavBar;
