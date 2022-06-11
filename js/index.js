const elMovieList = document.querySelector(".movie__list");
const elResult = document.querySelector(".movie__result-num");
const elSelect = document.querySelector(".select");
const elForm = document.querySelector(".form");

elResult.textContent = films.length;

elSelect.innerHTML = null;

const renderGenres = function (arr) {
  const uniqueGenres = [];

  arr.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!uniqueGenres.includes(genre)) {
        uniqueGenres.push(genre);
      }
    });
  });

  uniqueGenres.forEach((genre) => {
    const genreOption = document.createElement("option");

    genreOption.textContent = genre;
    genreOption.value = genre;

    elSelect.appendChild(genreOption);
  });
};

const renderMovies = function (filmsArr, htmlElement) {
  filmsArr.forEach((movie) => {
    //CREATE ELEMENT
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h5");
    const newLanguage = document.createElement("p");
    const newYear = document.createElement("p");
    const newButton = document.createElement("a");

    //SET ATTTIBUTE
    newLi.setAttribute("class", "card mb-3");
    newLi.style.width = "18rem";
    newImg.classList.add("card-img-top");
    newImg.setAttribute("src", movie.poster);
    newDiv.classList.add("card-body");
    newTitle.classList.add("card-title");
    newLanguage.classList.add("card-text");
    newYear.classList.add("card-text");
    newButton.setAttribute("class", "btn btn-danger");
    newButton.setAttribute(
      "href",
      `https://www.youtube.com/watch?v=${movie.youtubeId}`
    );

    newTitle.textContent = movie.title;
    // newLanguage.textContent = movie.overview;
    newYear.textContent = movie.year;
    newButton.textContent = "Watch Trailer";

    const genresList = document.createElement("ul");

    movie.genres.forEach((genre) => {
      const genresItem = document.createElement("li");

      genresItem.textContent = genre;

      genresList.appendChild(genresItem);
    });

    //APPEND
    htmlElement.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newTitle);
    // newDiv.appendChild(newLanguage);
    newDiv.appendChild(newYear);
    newDiv.appendChild(newButton);
    newDiv.appendChild(genresList);
  });
};

renderMovies(films, elMovieList);
renderGenres(films);

elForm.addEventListener("submit", function (evtjon) {
  evtjon.preventDefault();

  elMovieList.innerHTML = null;

  const selectValue = elSelect.value;

  const selectedMovies = [];

  films.forEach((film) => {
    if (film.genres.includes(selectValue)) {
      selectedMovies.push(film);
    }
  });

  renderMovies(selectedMovies, elMovieList);
});
