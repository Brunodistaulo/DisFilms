const MovieAdd = require("./MovieAdd");
const axios = require("axios");

async function getMovie() {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const dataMovie = response.data;
    MovieAdd(dataMovie);
  } catch (error) {
    console.log(error.message);
  }
}

getMovie();
