const MovieAdd = require("./MovieAdd");
const axios = require("axios");

axios.get("https://webpt19b.web.app/data/movies.json", (data) => {
  MovieAdd(data);
});

