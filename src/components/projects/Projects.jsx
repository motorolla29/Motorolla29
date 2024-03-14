import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ProjectBtn from '../project-button/Project-button';
import getSkillLogo from '../../utils/get-skill-logo';
import preloadImages from '../../utils/images-preloader';

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

  const verticalOrientation =
    window.innerWidth < 750 ||
    (window.innerHeight > window.innerWidth && window.innerHeight > 1190);

  if (verticalOrientation) {
    preloadImages();
  }

  useEffect(() => {
    const currentColor = colorSet[Math.floor(Math.random() * colorSet.length)];
    btnsRef.current.style.setProperty(`--current-color`, `${currentColor}`);
    subtitleRef.current.style.setProperty(`--current-color`, `${currentColor}`);
  }, [title]);

  useEffect(() => {
    const screenDelay = verticalOrientation ? 0.3 : 1;
    const animationAddedDelay = verticalOrientation ? 1 : 0;
    const screenPosition = verticalOrientation ? -100 : 100;

    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.1 + animationAddedDelay
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.4 + animationAddedDelay
      )
      .fromTo(
        skillsRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.7 + animationAddedDelay
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 },
        1 + animationAddedDelay
      )
      .fromTo(
        screenRef.current,
        { opacity: 0, x: screenPosition, scale: 0.8 },
        { opacity: 0.8, x: 0, scale: 1, duration: 1 },
        screenDelay
      )
      .play();

    return () => {
      tl.revert();
    };
  }, [title]);

  return (
    <div className="projects_container">
      <div className="project_info">
        <h2 ref={titleRef} className="project_title">
          {title}
        </h2>
        <p ref={subtitleRef} className="project_subtitle">
          {subtitle}
        </p>
        <div ref={skillsRef} className="project_skills">
          <h3 className="project_skills_title">Tech's:</h3>
          <ul>
            {skills.map((skill) => {
              return getSkillLogo(skill);
            })}
          </ul>
        </div>
        <div ref={btnsRef} className="project_buttons">
          <ProjectBtn text="View" href={demoLink} />
          <ProjectBtn text="Code" href={githubLink} />
        </div>
      </div>
      <div ref={screenRef} className="project_screen">
        <img
          className="project_screen_picture"
          alt="project-screen"
          src={`/project-screens/${preview}.webp`}
        />
      </div>
    </div>
  );
};

export default Projects;
