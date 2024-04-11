const convertirHTML = require("./renderCard");

function MovieAdd(data) {
  
    const cardSection = document.getElementById("cardMovie");
  
    data.forEach((movie) => {
      cardSection.appendChild(convertirHTML(movie));
    });
  }
  module.exports = MovieAdd;