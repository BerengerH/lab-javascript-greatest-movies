const movies = require('../src/data');
console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((el) => el.director);
  let directorsList = [...new Set(directors)];
  return directorsList;
}
//getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergDrama = moviesArray.filter((el) => {
    if (el.director === 'Steven Spielberg' && el.genre.includes('Drama')) {
      return true;
    }
  });
  return spielbergDrama;
}

//howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let initialValue = 0;
  let scoreSum = moviesArray.reduce((a, b) => a + b.score, initialValue);
  let average = (scoreSum / moviesArray.length).toFixed(2);
  return average;
}

//scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let initialValue = 0;

  let dramaMovies = moviesArray.filter((el) => {
    if (el.genre.includes('Drama')) {
      return true;
    }
  });

  let dramaScoreSum = dramaMovies.reduce((a, b) => a + b.score, initialValue);
  let dramaAverage = (dramaScoreSum / dramaMovies.length).toFixed(2);
  return dramaAverage;
}
//dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesByTitle = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
  let moviesByYear = moviesByTitle.sort((a, b) => a.year - b.year);
  return moviesByYear;
}

//orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleArray = moviesArray.map(a => a.title);
  titleArray = titleArray.sort((a, b) => a.localeCompare(b));

    if (titleArray.length > 20){
      return titleArray.slice(0, 20);
    }
    else{
      return titleArray;
    }
}

//orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
