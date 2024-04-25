const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    try {
      const movie = await Movie.find();
      return movie;
    } catch (error) {
      console.log("diciendo un error");
    }
  },
  createMovie: async (movieData) => {
    try {
      const newMovie = await Movie.create(movieData);
      console.log("la peli fue creada");
      return newMovie;
    } catch (error) {
      console.error(error);
      console.log("Error al crear la película");
    }
  },
};
