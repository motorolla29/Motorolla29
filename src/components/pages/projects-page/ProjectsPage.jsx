import { useParams } from 'react-router-dom';

import Pagination from '../../pagination/Pagination';
import Projects from '../../projects/Projects';
import { PROJECTS_DATA } from '../../../data/data';

import './projects-page.css';

const ProjectsPage = () => {
  let { id } = useParams();

  let currentProject = PROJECTS_DATA[id - 1] || PROJECTS_DATA[0];

  return (
    <div className="projects_page_container">
      <Projects project={currentProject} />
      <Pagination data={PROJECTS_DATA} currentProject={currentProject} />
    </div>
  );
};

export default ProjectsPage;
