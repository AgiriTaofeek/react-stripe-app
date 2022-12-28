import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../images/logo.svg';
import { useGlobalContext } from '../store/Context';
import Button from './UI/Button';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displayMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) closeSubmenu();
    
  };
  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="logo-stripe" className="nav-logo" />
          <Button css="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </Button>
        </div>
        <ul className="nav-links">
          <li>
            <Button css="link-btn" onMouseOver={displayMenu}>
              products
            </Button>
          </li>
          <li>
            <Button css="link-btn" onMouseOver={displayMenu}>
              developers
            </Button>
          </li>
          <li>
            <Button css="link-btn" onMouseOver={displayMenu}>
              company
            </Button>
          </li>
        </ul>
        <Button css="btn signin-btn">Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
