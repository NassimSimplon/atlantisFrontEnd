import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
       
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <Link to='/' className='nav-links' >
          مشتركين
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className='nav-links'
          >
          متواصلون
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/products'
            className='nav-links'
          >
          برامج
          </Link>
        </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
