const MovieAdd = require("./MovieAdd");

$.get("https://webpt19b.web.app/data/movies.json", (data) => {
  MovieAdd(data);
});
