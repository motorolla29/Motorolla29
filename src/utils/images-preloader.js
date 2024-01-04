const smallScreenImagesSources = [
  '/project-screens/small-m29.png ',
  '/project-screens/small-six-cities.png ',
  '/project-screens/small-got-db.png ',
  '/project-screens/small-resto.png ',
  '/project-screens/small-star-db.png ',
  '/project-screens/small-todo-app.png ',
  '/project-screens/small-draft-note.png ',
  '/project-screens/small-pixel-hunter.png ',
  '/project-screens/small-keksobooking.png ',
  '/project-screens/small-diet-food.png ',
  '/project-screens/small-movie-db.png ',
  '/project-screens/small-veg-rain.png',
  '/project-screens/small-uber-eats.png',
  '/project-screens/small-pied-piper.png ',
];
const mediumScreenImagesSources = [
  '/project-screens/medium-m29.png ',
  '/project-screens/medium-six-cities.png ',
  '/project-screens/medium-got-db.png ',
  '/project-screens/medium-resto.png ',
  '/project-screens/medium-star-db.png ',
  '/project-screens/medium-todo-app.png ',
  '/project-screens/medium-draft-note.png ',
  '/project-screens/medium-pixel-hunter.png ',
  '/project-screens/medium-keksobooking.png ',
  '/project-screens/medium-diet-food.png ',
  '/project-screens/medium-movie-db.png ',
  '/project-screens/medium-veg-rain.png',
  '/project-screens/medium-uber-eats.png',
  '/project-screens/medium-pied-piper.png ',
];
const largeScreenImagesSources = [
  '/project-screens/large-m29.png ',
  '/project-screens/large-six-cities.png ',
  '/project-screens/large-got-db.png ',
  '/project-screens/large-resto.png ',
  '/project-screens/large-star-db.png ',
  '/project-screens/large-todo-app.png ',
  '/project-screens/large-draft-note.png ',
  '/project-screens/large-pixel-hunter.png ',
  '/project-screens/large-keksobooking.png ',
  '/project-screens/large-diet-food.png ',
  '/project-screens/large-movie-db.png ',
  '/project-screens/large-veg-rain.png',
  '/project-screens/large-uber-eats.png',
  '/project-screens/large-pied-piper.png ',
];

function preloadImages() {
  if (window.innerWidth >= 1200) {
    largeScreenImagesSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  if (window.innerWidth >= 500) {
    mediumScreenImagesSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  } else {
    smallScreenImagesSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
}

export { preloadImages };
