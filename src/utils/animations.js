const titleAnimation = {
  from: { opacity: 0, y: -10 },
  to: { opacity: 1, y: 0 },
};
const subtitleAnimation = {
  from: { opacity: 0, y: -10 },
  to: { opacity: 1, y: 0 },
  delay: 200,
};
const skillsAnimation = {
  from: { opacity: 0, y: -10 },
  to: { opacity: 1, y: 0 },

  delay: 400,
};
const buttonsAnimation = {
  from: { opacity: 0, y: -10, scale: 0.9 },
  to: { opacity: 1, y: 0, scale: 1 },

  delay: 600,
};
const screenAnimation = {
  from: { opacity: 0, x: 100, scale: 0.8 },
  to: { opacity: 0.8, x: 0, scale: 1 },
  delay: 600,
};

export {
  titleAnimation,
  subtitleAnimation,
  skillsAnimation,
  buttonsAnimation,
  screenAnimation,
};
