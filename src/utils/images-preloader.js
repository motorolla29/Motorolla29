const smallScreenImagesSources = [
  '/public/project-screens/small-veg-rain.png',
  '/public/project-screens/small-uber-eats.png',
  '/public/project-screens/small-todo-app.png ',
  '/public/project-screens/small-star-db.png ',
  '/public/project-screens/small-six-cities.png ',
  '/public/project-screens/small-resto.png ',
  '/public/project-screens/small-pixel-hunter.png ',
  '/public/project-screens/small-pied-piper.png ',
  '/public/project-screens/small-movie-db.png ',
  '/public/project-screens/small-m29.png ',
  '/public/project-screens/small-keksobooking.png ',
  '/public/project-screens/small-got-db.png ',
  '/public/project-screens/small-draft-note.png ',
  '/public/project-screens/small-diet-food.png ',
];

const preloadSmallImages = () => {
  smallScreenImagesSources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default preloadSmallImages;
