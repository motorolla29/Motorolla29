import { NavLink } from 'react-router-dom';

import './menu.css';

const Menu = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Menu;
