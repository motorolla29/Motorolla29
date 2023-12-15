import './project-button.css';

const ProjectBtn = ({ href, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="sliding-button"
    >
      {text}
    </a>
  );
};

export default ProjectBtn;
