class Form {
  constructor(title, year, director, duration, genre, rate, poster) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.genre = genre;
    this.duration = duration;
    this.rate = rate;
    this.poster = poster;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const genres = document.querySelectorAll('input[type="checkbox"]');

  const inputs = (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const titleInputValue = titleInput.value;
    const yearInput = document.getElementById("year");
    const yearInputValue = yearInput.value;
    const durationInput = document.getElementById("duration");
    const durationInputValue = durationInput.value;
    const directorInput = document.getElementById("director");
    const directorInputValue = directorInput.value;

    const rateInput = document.getElementById("rate");
    const rateInputValue = rateInput.value;
    const posterInput = document.getElementById("poster");
    const posterInputValue = posterInput.value;

    const genresTrue = [];

    for (const genre of genres) {
      if (genre.checked) {
        genresTrue.push(genre.name);
      }
    }

    const form = new Form(
      titleInputValue.trim(),
      yearInputValue.trim(),
      directorInputValue.trim(),
      durationInputValue.trim(),
      genresTrue,
      rateInputValue.trim(),
      posterInputValue.trim()
    );
    console.log("Instancia de Form:", form);
    enviarDatos(form); // Tengo que agregar esta línea para enviar los datos al servidor
  };
  const enviarDatos = async (form) => {
    try {
      const response = await axios.post("http://localhost:3001/movies", form);
      alert("Respuesta del servidor:", response.data);
    } catch (error) {
      alert("Error al enviar los datos:", error.message);
    }
  };

  const agregar = document.getElementById("enviarBtn");
  agregar.addEventListener("click", inputs);

  //? Vaciar valores V
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("movieForm");
  const limpiarBtn = document.getElementById("limpiar");

  limpiarBtn.addEventListener("click", function () {
    form.reset();
  });
});
