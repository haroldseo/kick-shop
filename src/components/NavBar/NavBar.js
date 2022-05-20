import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className='nav-container'>
        {/* <div className='menu-icon'>=</div> */}
        <Link to='/' className='nav-logo'>
          kickshop
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Collections
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Men
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Women
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>
        <Link to='/' className='nav-cart'>
          <img src={require("../../images/cart-icon.svg").default} alt='cart-icon' />
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
