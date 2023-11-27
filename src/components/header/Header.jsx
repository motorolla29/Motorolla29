import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/Untitled-1.png';
import logo2 from '../../images/Untitled-2.png';

import './header.css';
import { useState } from 'react';

const Header = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="header_container">
      <div className="header">
        <div className="logo_container">
          <Link to="/">
            <img
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="logo"
              alt="logo"
              src={hovered ? logo : logo2}
            ></img>
          </Link>
        </div>
        <nav className="header_nav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
