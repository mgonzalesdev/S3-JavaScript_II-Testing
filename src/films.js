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
  let result = [...array];
  return result.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
  }).map(movie => movie.title).slice(0, 20);


}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // return result = array.sort((a, b) => a.year - b.year)
  let copyArray = array.map(element => ({ ...element })); // Crear una copia del array original para no modificarlo directamente
  copyArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Ordenar por año (ascendente)
    } else {
      //return a.title.localeCompare(b.title); // Ordenar por título (alfabético)
      // return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : 0;
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
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
  let calificaciones = array.filter(movie => movie.genre.includes(genre)).map(movie => movie.score);
  if (calificaciones.length === 0) return 0; // Si no hay películas en la categoría, retornar 0
  return parseFloat((calificaciones.reduce((accumulator, score) => accumulator + score, 0) / calificaciones.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {
    const durationStr = movie.duration;
    let totalMinutes = 0;

    // Expresiones regulares para extraer horas y minutos
    const hourMatch = durationStr.match(/(\d+)h/);
    const minMatch = durationStr.match(/(\d+)min/);

    if (hourMatch) {
      totalMinutes += parseInt(hourMatch[1], 10) * 60;
    }

    if (minMatch) {
      totalMinutes += parseInt(minMatch[1], 10);
    }

    // Retornar una nueva copia del objeto, con duration en minutos
    return {
      ...movie,
      duration: totalMinutes
    };
  });

  // const movies2 = [...movies];
  // return movies2.map(movie => {
  //   let duration = movie.duration;
  //   let totalMinutes = 0;

  //   if (typeof duration !== 'string') return { ...movie, duration: 0 };

  //   if (duration.includes('h')) {
  //     let hours = parseInt(duration.split('h')[0]);
  //     totalMinutes += hours * 60; // Convertir horas a minutos
  //     duration = duration.split('h')[1].trim(); // Actualizar duración para procesar minutos
  //   }

  //   if (duration.includes('min')) {
  //     let minutes = parseInt(duration.replace('min', '').trim());
  //     totalMinutes += minutes; // Añadir minutos
  //   }
  //   return {
  //     ...movie,
  //     duration: totalMinutes
  //   };
  // })


  // const partes = str.split(' ');
  // let totalMinutos = 0;

  // partes.forEach(parte => {
  //   if (parte.endsWith('h')) {
  //     totalMinutos += parseInt(parte) * 60; // Convertir horas a minutos
  //   } else if (parte.endsWith('min')) {
  //     totalMinutos += parseInt(parte); // Añadir minutos
  //   }
  // });

  // return totalMinutos;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesOfYear = array.filter(movie => movie.year === year);

  if (moviesOfYear.length === 0) return []; // Si no hay películas del año, retornar null
  const maxScore = Math.max(...moviesOfYear.map(movie => movie.score));

  let result = moviesOfYear.filter(movie => movie.score === maxScore);
  return result;
  // let bestMovie = moviesOfYear.reduce((best, current) => {
  //   return current.score > best.score ? current : best;
  // });
  // console.log(bestMovie);
  // return bestMovie;

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
