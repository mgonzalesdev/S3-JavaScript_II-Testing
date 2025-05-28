const movies = require("./data");
//import movies from "./data.js";
//console.log(movies);
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
  let result = array.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
  }).map(movie => movie.title).slice(0, 20);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  // return result = array.sort((a, b) => a.year - b.year)
  let result = movies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Ordenar por año (ascendente)
    } else {
      //return a.title.localeCompare(b.title); // Ordenar por título (alfabético)
      return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : 0;
    }
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesByCategory = array.map(movie => {
    if (movie.genre.includes(genre))
      return movie.score;
  });
  return parseFloat((moviesByCategory.reduce((accumulator, score) => accumulator + score, 0) / moviesByCategory.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

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
