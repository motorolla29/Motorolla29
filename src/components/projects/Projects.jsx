import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ProjectBtn from '../project-button/Project-button';
import getSkillLogo from '../../utils/get-skill-logo';

import './projects.css';

const colorSet = [
  'rgba(252, 255, 89, 0.25)',
  'rgba(255, 89, 89, 0.25)',
  'rgba(255, 144, 89, 0.25)',
  'rgba(255, 197, 89, 0.25)',
  'rgba(180, 255, 89, 0.25)',
  'rgba(111, 255, 89, 0.25)',
  'rgba(89, 255, 158, 0.25)',
  'rgba(89, 255, 249, 0.25)',
  'rgba(89, 180, 255, 0.25)',
  'rgba(168, 126, 252, 0.25)',
  'rgba(224, 168, 255, 0.25)',
  'rgba(255, 10, 190, 0.25)',
  'rgba(255, 10, 96, 0.25)',
  'rgba(95, 232, 191, 0.25)',
  'rgba(165, 255, 59, 0.25)',
  'rgba(247, 158, 49, 0.25)',
  'rgba(247, 221, 49, 0.25)',
  'rgba(255, 255, 255, 0.25)',
  'rgba(153, 191, 175, 0.25)',
  'rgba(214, 235, 174, 0.25)',
];

const Projects = ({
  project: { title, subtitle, githubLink, demoLink, skills, preview },
}) => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const skillsRef = useRef();
  const btnsRef = useRef();
  const screenRef = useRef();

  const tl = gsap.timeline();

  console.log('project');

  useEffect(() => {
    console.log('useeffect');

    const currentColor = colorSet[Math.floor(Math.random() * colorSet.length)];
    btnsRef.current.style.setProperty(`--current-color`, `${currentColor}`);
    subtitleRef.current.style.setProperty(`--current-color`, `${currentColor}`);

    tl.to(titleRef.current, { opacity: 1, y: 0 })
      .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.2)
      .to(skillsRef.current, { opacity: 1, y: 0 }, 0.4)
      .to(btnsRef.current, { opacity: 1, y: 0, scale: 1 }, 0.6)
      .to(screenRef.current, { opacity: 1, x: 0, scale: 1 }, 0.6)
      .play();
  }, [title, tl]);

  return (
    <div className="projects_container">
      <div className="project_info_container">
        <div className="project_info">
          <h2 ref={titleRef} className="project_title slide-down">
            {title}
          </h2>
          <p ref={subtitleRef} className="project_subtitle slide-down">
            {subtitle}
          </p>
          <div ref={skillsRef} className="project_skills slide-down">
            <h3 className="project_skills_title">Tech's:</h3>
            <ul>
              {skills.map((skill) => {
                return getSkillLogo(skill);
              })}
            </ul>
          </div>
          <div ref={btnsRef} className="project_buttons slide-down-scale">
            <ProjectBtn text="View" href={demoLink} />
            <ProjectBtn text="Code" href={githubLink} />
          </div>
        </div>
      </div>

      <div ref={screenRef} className="project_screen slide-left-scale">
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet={`/project-screens/large-${preview}.png`}
            type="image/png"
          />
          <img
            className="project_screen_picture"
            alt="project-screen"
            src={`/project-screens/medium-${preview}.png`}
          />
        </picture>
      </div>
    </div>
  );
};

export default Projects;
