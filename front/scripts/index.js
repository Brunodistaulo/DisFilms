const MovieAdd = require("./MovieAdd");
const axios = require("axios");

async function getMovie() {
  try {
    const response = await axios.get("https://webpt19b.web.app/data/movies.json");
      const dataMovie = response.data;
    MovieAdd(dataMovie)
    
  } catch (error) {
    console.log(error.message);
  }
}

getMovie();