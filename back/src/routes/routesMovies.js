const express = require("express");
const movieController = require("../controllers/movieControllers");
const routesMovies = express.Router();

routesMovies.get("/", movieController);

module.exports = routesMovies;
