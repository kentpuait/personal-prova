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

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Quardato poco i film");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Lei spettatore clasico");
} else if (personalMovieDB.count >= 30) {
  console.log("Lei cinefilo");
} else {
  console - log("Errore");
}

console.log(personalMovieDB);
