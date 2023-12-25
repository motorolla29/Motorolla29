import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Pagination from '../../pagination/Pagination';
import Projects from '../../projects/Projects';
import { PROJECTS_DATA } from '../../../data/data';

import './projects-page.css';

const ProjectsPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  let currentProject = PROJECTS_DATA[id - 1] || PROJECTS_DATA[0];

  const [touchstartX, setTouchstartX] = useState(0);
  const [touchendX, setTouchendX] = useState(0);
  const [touchstartY, setTouchstartY] = useState(0);
  const [touchendY, setTouchendY] = useState(0);

  function handleGesure() {
    if (
      touchendX < touchstartX - 50 &&
      touchendY - touchstartY < 50 &&
      touchendY - touchstartY > -50
    ) {
      if (!id) {
        return navigate(`/projects/2`);
      } else {
        return id < PROJECTS_DATA.length ? navigate(`/projects/${++id}`) : null;
      }
    }
    if (
      touchendX > touchstartX + 50 &&
      touchendY - touchstartY < 50 &&
      touchendY - touchstartY > -50
    ) {
      return id > 1 ? navigate(`/projects/${--id}`) : null;
    }
  }

  const onTouchstartHandler = (e) => {
    if (e.targetTouches.length === 1) {
      setTouchstartX(e.targetTouches[0].screenX);
      setTouchstartY(e.targetTouches[0].screenY);
    }
  };

  const onTouchendHandler = (e) => {
    if (e.changedTouches.length === 1) {
      setTouchendX(e.changedTouches[0].screenX);
      setTouchendY(e.changedTouches[0].screenY);
      handleGesure();
    }
  };

  return (
    <div
      onTouchStart={onTouchstartHandler}
      onTouchEnd={onTouchendHandler}
      className="projects_page_container"
    >
      <Projects project={currentProject} />
      <Pagination data={PROJECTS_DATA} currentProject={currentProject} />
    </div>
  );
};

export default ProjectsPage;
