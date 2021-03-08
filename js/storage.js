function Storage() {
}

Storage.prototype.addFilmToLocalStorage = function (newFilm) {
  let films = this.getFilmsFromLocalStorage()
  films.push(newFilm)
  localStorage.setItem("films", JSON.stringify(films))
}

Storage.prototype.getFilmsFromLocalStorage = function () {
  let films

  if (localStorage.getItem("films") === null) {
    films = []
  } else {
    films = JSON.parse(localStorage.getItem("films"))
  }

  return films
}

