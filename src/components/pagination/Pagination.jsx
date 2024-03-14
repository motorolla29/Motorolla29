import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

import { ReactComponent as IconArrowLeft } from './../../images/icons/chevron_square_left_icon_236885.svg';
import { ReactComponent as IconArrowRigth } from './../../images/icons/chevron_square_right_icon_236884.svg';

import './pagination.css';

const Pagination = ({ data, currentProject }) => {
  const paginationRef = useRef();

  const verticalOrientation =
    window.innerWidth < 750 ||
    (window.innerHeight > window.innerWidth && window.innerHeight > 1190);

  useEffect(() => {
    const paginationY = verticalOrientation ? -20 : 20;
    const paginationDelay = verticalOrientation ? 0 : 1;

    const tl = gsap.timeline();
    tl.fromTo(
      paginationRef.current,
      { opacity: 0, y: paginationY },
      { opacity: 1, y: 0, duration: 1 },
      paginationDelay
    ).play();
  }, [data]);

  return (
    <nav ref={paginationRef} className="pagination">
      <ul className="pagination_list">
        <NavLink
          to={`/projects/${
            currentProject.id > 1 ? currentProject.id - 1 : currentProject.id
          }`}
          className={`pagination_arrow_previous${
            currentProject.id === (1 || undefined)
              ? ' pagination_arrow_disabled'
              : ''
          }`}
          title={`Previous`}
        >
          <IconArrowLeft className="arrow_icon"></IconArrowLeft>
        </NavLink>
        {data.map((it) => (
          <NavLink
            className={`pagination_link${
              it.id === 1 && currentProject.id === 1 ? ' active' : ''
            }`}
            style={{
              display: `${
                it.id === currentProject.id ||
                it.id === currentProject.id + 1 ||
                it.id === currentProject.id + 2 ||
                it.id === currentProject.id - 1 ||
                it.id === currentProject.id - 2 ||
                (it.id === currentProject.id + 3 &&
                  (currentProject.id === 1 || currentProject.id === 2)) ||
                (it.id === currentProject.id + 4 && currentProject.id === 1) ||
                (it.id === currentProject.id - 3 &&
                  (currentProject.id === data.length ||
                    currentProject.id === data.length - 1)) ||
                (it.id === currentProject.id - 4 &&
                  currentProject.id === data.length)
                  ? 'block'
                  : 'none'
              }`,
            }}
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
          className={`pagination_arrow_next${
            currentProject.id === data.length
              ? ' pagination_arrow_disabled'
              : ''
          }`}
          title={`Next`}
        >
          <IconArrowRigth className="arrow_icon"></IconArrowRigth>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Pagination;
