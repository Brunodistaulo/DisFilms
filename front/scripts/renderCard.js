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
    dtMovie.innerHTML = `Director: ${director}`;
    dtMovie.classList.add("movieDirector");
  
    const gnereMovie = document.createElement("p");
    gnereMovie.textContent = genre;
    dtMovie.classList.add("movieGnere");
  
    const rateMovie = document.createElement("p");
    rateMovie.textContent = `Rate: ${rate}⭐️`;
    rateMovie.classList.add("movieRate");
  
    const cardDetails = document.createElement("div");
    cardDetails.classList.add("cardDetails");
  
    const contenedorPrueba = document.getElementById("cardMovie");
  
    const divTodo = document.createElement("div");
    divTodo.classList.add("divTodo");
  
    divTodo.appendChild(posterMovie);
    cardDetails.appendChild(titleMovie);
    cardDetails.appendChild(yearMovie);
    cardDetails.appendChild(dtMovie);
    cardDetails.appendChild(gnereMovie);
    cardDetails.appendChild(rateMovie);
    contenedorPrueba.appendChild(divTodo);
    divTodo.appendChild(cardDetails);
    
  
    return divTodo;
  };
  module.exports = convertirHTML;