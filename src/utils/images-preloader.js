const IMAGES_SOURCES = [
  '/project-screens/m29.webp ',
  '/project-screens/six-cities.webp ',
  '/project-screens/got-db.webp ',
  '/project-screens/resto.webp ',
  '/project-screens/star-db.webp ',
  '/project-screens/todo-app.webp ',
  '/project-screens/draft-note.webp ',
  '/project-screens/pixel-hunter.webp ',
  '/project-screens/keksobooking.webp ',
  '/project-screens/diet-food.webp ',
  '/project-screens/movie-db.webp ',
  '/project-screens/veg-rain.webp',
  '/project-screens/uber-eats.webp',
  '/project-screens/pied-piper.webp ',
];

const preloadImages = () => {
  IMAGES_SOURCES.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default preloadImages;
