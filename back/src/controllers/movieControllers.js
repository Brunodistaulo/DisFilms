const moviesService = require("../services/moviesService");


const movieController = async (req, res) => {
  try {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "hiciste todo mal wachin" });
  }
};

module.exports = movieController;
