var movies = require('./movies');

var katMovies = movies();

katMovies.favMovie = "The Notebook";
console.log("Kat's fav movie is :" + katMovies.favMovie);