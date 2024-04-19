const express = require("express");
const indexController = require("../controllers/indexController");
const routerIndex = express.Router();

routerIndex.get("/", indexController);


module.exports = routerIndex