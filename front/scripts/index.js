function convertirHTML(movie) {
  const { title, year, director, genre, rate, poster } = movie;

  const posterMovie = document.createElement("img");
  posterMovie.src = poster;
  posterMovie.classList.add("moviePoster");
  const titleMovie = document.createElement("a");
  titleMovie.textContent = title;
  titleMovie.href = "";
  titleMovie.id = "movieTitle";

  const yearMovie = document.createElement("p");
  yearMovie.textContent = `Año: ${year}`;
  yearMovie.classList.add("movieYears");

  const dtMovie = document.createElement("p");
  dtMovie.textContent = `Director: ${director}`;
  dtMovie.classList.add("movieDirector");

  const gnereMovie = document.createElement("p");
  gnereMovie.textContent = genre;
  dtMovie.classList.add("movieGnere");

  const rateMovie = document.createElement("p");
  rateMovie.textContent = `Rate: ${rate}⭐️`;
  rateMovie.classList.add("movieRate");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("containerCard");

  /////////////////////////////////////////////////////////////////

  // const detalles = document.createElement("p");
  // detalles.textContent = `${title},Director: ${director},Año: ${year},Duración: ${year},Género: ${genre.join(", ")},Rate: ${rate};`;
  // detalles.id = "detailsMovie";

  cardContainer.appendChild(posterMovie);
  cardContainer.appendChild(titleMovie);
  cardContainer.appendChild(yearMovie);
  cardContainer.appendChild(dtMovie);
  cardContainer.appendChild(gnereMovie);
  cardContainer.appendChild(rateMovie);

  return cardContainer;
}

function MovieAdd(data) {
  const cardSection = document.getElementById("cardMovie");
  
  data.forEach(movie =>{
    cardSection.appendChild(convertirHTML(movie))
  })

}
$.get("https://students-api.up.railway.app/movies", (data)=>{
  MovieAdd(data)
});



  function getCards(Commigsoon) {
    const { title, year, director, genero, poster } = Commigsoon;

    const posterComming = document.createElement("img");
    posterComming.src = poster;
    posterComming.classList.add("commingPoster");

    const titleComming = document.createElement("h3");
    titleComming.textContent = title;
    titleComming.id = "commingTitle";

    const yearComming = document.createElement("p");
    yearComming.textContent = `Año: ${year}`;
    yearComming.classList.add("commingYear");

    const directorComming = document.createElement("p");
    directorComming.textContent = `Director: ${director}`;
    directorComming.classList.add("commingDirector");

    const generoComming = document.createElement("p");
    generoComming.textContent = genero;
    generoComming.classList.add("commingGenero");

    const containerComming = document.createElement("div");
    containerComming.classList.add("slide-track");

    containerComming.appendChild(posterComming);
    containerComming.appendChild(titleComming);
    containerComming.appendChild(yearComming);
    containerComming.appendChild(directorComming);
    containerComming.appendChild(generoComming);

    return containerComming;
  }

  function addComming() {
    const cardComming = document.getElementById("slider");

    const newCardComming = tempDataCommingSoon.map(getCards);

    newCardComming.forEach((Commigsoon) => {
      cardComming.appendChild(Commigsoon);
    });
  }

  addComming();
