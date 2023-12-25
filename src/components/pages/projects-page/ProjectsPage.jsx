import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Pagination from '../../pagination/Pagination';
import Projects from '../../projects/Projects';
import { PROJECTS_DATA } from '../../../data/data';

import './projects-page.css';

const ProjectsPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  let currentProject = PROJECTS_DATA[id - 1] || PROJECTS_DATA[0];

  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;
    let touchstartY = 0;
    let touchendY = 0;

    function handleGesure() {
      if (
        !(window.visualViewport.scale > 1) &&
        touchendX < touchstartX - 25 &&
        touchendY - touchstartY < 50 &&
        touchendY - touchstartY > -50
      ) {
        if (!id) {
          return navigate(`/projects/2`);
        } else {
          return id < PROJECTS_DATA.length
            ? navigate(`/projects/${++id}`)
            : null;
        }
      }
      if (
        !(window.visualViewport.scale > 1) &&
        touchendX > touchstartX + 25 &&
        touchendY - touchstartY < 50 &&
        touchendY - touchstartY > -50
      ) {
        return id > 1 ? navigate(`/projects/${--id}`) : null;
      }
    }
    const gesuredZone = document.querySelector('.projects_page_container');

    const onTouchstartHandler = (e) => {
      if (e.targetTouches.length === 1) {
        touchstartX = e.targetTouches[0].screenX;
        touchstartY = e.targetTouches[0].screenY;
      }
    };

    const onTouchendHandler = (e) => {
      if (e.changedTouches.length === 1) {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        handleGesure();
      }
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
