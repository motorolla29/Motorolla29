import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as IconArrowLeft } from './../../images/icons/chevron_square_left_icon_236885.svg';
import { ReactComponent as IconArrowRigth } from './../../images/icons/chevron_square_right_icon_236884.svg';

import './pagination.css';

const Pagination = ({ data, currentProject }) => {
  return (
    <nav className="pagination">
      <ul className="pagination_list">
        <NavLink
          to={`/projects/${
            currentProject.id > 1 ? currentProject.id - 1 : currentProject.id
          }`}
          className="pagination_arrow_previous"
          title={`Previous`}
        >
          <IconArrowLeft className="arrow_icon"></IconArrowLeft>
        </NavLink>
        {data.map((it) => (
          <NavLink
            className={`pagination_link ${
              it.id === 1 && currentProject.id === 1 ? 'active' : null
            }`}
            key={it.id}
            to={`/projects/${it.id}`}
          >
            {it.id}
          </NavLink>
        ))}
        <NavLink
          to={`/projects/${
            currentProject.id < data.length
              ? currentProject.id + 1
              : currentProject.id
          }`}
          className="pagination_arrow_next"
          title={`Next`}
        >
          <IconArrowRigth className="arrow_icon"></IconArrowRigth>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Pagination;
