import { useParams, useNavigate } from 'react-router-dom';

import Pagination from '../../pagination/Pagination';
import Projects from '../../projects/Projects';
import { PROJECTS_DATA } from '../../../data/data';

import './projects-page.css';
import { useEffect } from 'react';

const ProjectsPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  let currentProject = PROJECTS_DATA[id - 1] || PROJECTS_DATA[0];

  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;
    function handleGesure() {
      if (touchendX < touchstartX) {
        return id > 1 ? navigate(`/projects/${--id}`) : null;
      }
      if (touchendX > touchstartX) {
        return id < PROJECTS_DATA.length ? navigate(`/projects/${++id}`) : null;
      }
    }
    const gesuredZone = document.querySelector('.projects_page_container');

    const onTouchstartHandler = (event) => {
      touchstartX = event.screenX;
    };

    const onTouchendHandler = (event) => {
      touchendX = event.screenX;
      handleGesure();
    };

    gesuredZone.addEventListener('touchstart', onTouchstartHandler, false);
    gesuredZone.addEventListener('touchend', onTouchendHandler, false);

    return () => {
      gesuredZone.removeEventListener('touchstart', onTouchstartHandler);
      gesuredZone.removeEventListener('touchend', onTouchendHandler);
    };
  });

  return (
    <div className="projects_page_container">
      <Projects project={currentProject} />
      <Pagination data={PROJECTS_DATA} currentProject={currentProject} />
    </div>
  );
};

export default ProjectsPage;
