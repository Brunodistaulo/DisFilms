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
};
