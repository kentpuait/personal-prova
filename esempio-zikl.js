const numberOfFilms = +prompt("Quanto i film già ha visto?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/* const a = prompt("Ultimo film?", "");
const b = prompt("Vota?", "");
const c = prompt("Ultimo film?", "");
const d = prompt("Vota?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

for (let i = 0; i < 2; i++) {
  const a = prompt("Ultimo film?", "");
  const b = prompt("Vota?", "");

  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
