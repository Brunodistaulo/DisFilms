function convertirHTML(movie) {
  const { title, year, director, genre, rate, poster } = movie;

  // const titleMovie = document.createElement('h3');
  // titleMovie.textContent = title;
  // titleMovie.id = 'movieTitle'

  // const yearMovie = document.createElement('p');
  // yearMovie.textContent = year;
  // yearMovie.classList.add('movieYears');

  // const dtMovie = document.createElement('p');
  // dtMovie.textContent = director;
  // dtMovie.classList.add('movieDirector');

  // const gnereMovie = document.createElement('p');
  // gnereMovie.textContent = genre;
  // dtMovie.classList.add('movieGnere');

  // const rateMovie = document.createElement('p');
  // rateMovie.textContent = rate;
  // rateMovie.classList.add('movieRate');
  const detalles = document.createElement("p");
  detalles.textContent = `${title},Director: ${director},
   Año: ${year},
    Duración: ${year},
    Género: ${genre.join(", ")}, 
    Rate: ${rate};`;
  detalles.id = "detailsMovie";

  const posterMovie = document.createElement("img");
  posterMovie.src = poster;
  posterMovie.classList.add("moviePoster");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("containerCard");

  // cardContainer.appendChild(titleMovie);
  // cardContainer.appendChild(yearMovie);
  // cardContainer.appendChild(dtMovie);
  // cardContainer.appendChild(gnereMovie);
  // cardContainer.appendChild(rateMovie);
  cardContainer.appendChild(posterMovie);
  cardContainer.appendChild(detalles);

  return cardContainer;
}

function MovieAdd() {
  const cardSection = document.getElementById("cardMovie");

  const newCardSection = tempData.map(convertirHTML);

  newCardSection.forEach((movie) => {
    cardSection.appendChild(movie);
  });
}

MovieAdd();
