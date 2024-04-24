const express = require("express");
const {movieController, createMovie} = require("../controllers/movieControllers");
const routesMovies = express.Router();

routesMovies.get("/", movieController);
routesMovies.post("/", createMovie);

module.exports = routesMovies;
