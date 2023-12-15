import { useState } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { NavLink, Link } from 'react-router-dom';

import './burger-menu.css';

const BurgerMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Menu
      {...props}
      right
      width={'250px'}
      isOpen={isMenuOpen}
      pageWrapId={'layout'}
      outerContainerId={'layout_container'}
      onStateChange={(state) => handleStateChange(state)}
    >
      <NavLink onClick={() => closeMenu()} to="/">
        Home
      </NavLink>
      <NavLink onClick={() => closeMenu()} to="/about">
        About
      </NavLink>
      <NavLink onClick={() => closeMenu()} to="/projects">
        Projects
      </NavLink>
      <NavLink onClick={() => closeMenu()} to="/contacts">
        Contacts
      </NavLink>
    </Menu>
  );
};

export default BurgerMenu;
