const movieService = require("../services/moviesService");


const movieController = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "hiciste todo mal wachin" });
  }
};
const createMovie = async (req, res) => {
    try {
        const { title, duration, year, director, genre, rate, poster } = req.body;

        // if (!title || !duration || !year || !director || !genres || !rate || !poster) {
        //     return res.status(400).json({ message: "Faltan datos para crear la película" });
        // }
        const newMovie = await movieService.createMovie({ title, duration, year, director, genre, rate, poster });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
}
module.exports = {movieController, createMovie};

