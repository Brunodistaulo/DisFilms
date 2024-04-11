const MovieAdd = require("./MovieAdd");

$.get("https://students-api.up.railway.app/movies", (data) => {
  MovieAdd(data);
});
