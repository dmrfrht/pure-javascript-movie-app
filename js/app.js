const form = document.querySelector("#film-form")
const titleElement = document.querySelector('#title')
const directorElement = document.querySelector('#director')
const urlElement = document.querySelector('#url')
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.querySelector("#clear-films")

// UI Objesi
const ui = new UI()

// Storage Objesi
const storage = new Storage()

eventListener()

function eventListener() {
  form.addEventListener("submit", addFilm)
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromLocalStorage()
    ui.loadAllFilms(films)
  })
  cardBody.addEventListener("click", deleteFilm)
  clear.addEventListener("click", clearAllFilms)
}

function addFilm(e) {
  const title = titleElement.value
  const director = directorElement.value
  const url = urlElement.value

  if ((title === "") || (director === "") || (url === "")) {
    ui.displayMessages("danger", "Tüm alanları doldurunuz 😠😠")
  } else {
    const newFilm = new Film(title, director, url)

    ui.addFilmToUI(newFilm)
    storage.addFilmToLocalStorage(newFilm)
    ui.displayMessages("success", "Film başarılı bir şekilde eklendi 😇😇")
  }

  ui.clearInputs(titleElement, directorElement, urlElement)

  e.preventDefault()
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    if (confirm("Filmi kaldırmak istediğinizden emin misiniz?")) {
      ui.deleteFilmFromUI(e.target)
      storage.deleteFilmFormLocalStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
      ui.displayMessages("success", "Film silme işlemi başarılı 😅😅")
    }
  }
}

function clearAllFilms() {
  if (confirm("Tüm filmleri silmek istediğinizden emin misiniz?")) {
    ui.clearAllFilmsFromUI()
    storage.clearAllFilmFormLocalStorage()
  }
}






