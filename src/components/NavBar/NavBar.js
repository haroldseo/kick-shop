import React from "react";

import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className='nav-container'>
        {/* <div className='menu-icon'>=</div> */}
        <div className='nav-logo'>kickshop</div>
        <ul className='nav-menu'>
          <li className='nav-item'>Collections</li>
          <li className='nav-item'>Men</li>
          <li className='nav-item'>Women</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
        </ul>
        <div className='nav-cart'>
          <img src={require("../../images/cart-icon.svg").default} alt='cart-icon' />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
