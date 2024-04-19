const express = require("express");
const server = express();
const routerIndex = require("./routes/routerIndex");
const routesMovies = require("./routes/routesMovies");
const morgan = require("morgan");
const cors = require("cors");

server.use(express.json());
server.use(morgan("dev")); //* tiny, combined
server.use(cors());

server.use("/", routerIndex);
server.use("/movies", routesMovies);

module.exports = server;
