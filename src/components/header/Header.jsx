import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
        <div className="logo_container">
          <Link to="/" className="logo" />
          <div className="logo_preload"></div>
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
