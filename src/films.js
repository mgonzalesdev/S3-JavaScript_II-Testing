const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director === director);
  let sum = moviesFromDirector.reduce((accumulator, movie) => accumulator + movie.score, 0);
  return parseFloat((sum / moviesFromDirector.length).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array
    .map(movie => movie.title)
    .sort((a, b) => {
      return a.toUpperCase() < b.toUpperCase() ? -1 : a.toUpperCase() > b.toUpperCase() ? 1 : 0
    })
    .slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let copyArray = array.map(movie => ({ ...movie }));
  copyArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return copyArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let score = array
    .filter(movie => movie.genre.includes(genre))
    .map(movie => movie.score);

  if (score.length === 0)
    return 0;
  return parseFloat((score.reduce((accumulator, score) => accumulator + score, 0) / score.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {
    const copyMovie = { ...movie }
    let durationString = copyMovie.duration;
    let totalMinutes = 0;

    if (typeof durationString !== 'string') {
      copyMovie.duration = 0;
      return copyMovie;
    }

    if (durationString.includes('h')) {
      let hours = parseInt(durationString.split('h')[0]);
      if (!isNaN(hours)) {
        totalMinutes += hours * 60;
      }
      durationString = durationString.split('h')[1].trim();
    }

    if (durationString.includes('min')) {
      let minutes = parseInt(durationString.replace('min', '').trim());
      if (!isNaN(minutes)) {
        totalMinutes += minutes;
      }
    }
    copyMovie.duration = totalMinutes;
    return copyMovie;
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesOfYear = array.filter(movie => movie.year === year);

  if (moviesOfYear.length === 0)
    return [];

  const maxScore = Math.max(...moviesOfYear.map(movie => movie.score));

  let result = moviesOfYear.filter(movie => movie.score === maxScore);

  return result;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
