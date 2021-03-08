const form = document.querySelector("#film-form")
const titleElement = document.querySelector('#title')
const directorElement = document.querySelector('#director')
const urlElement = document.querySelector('#url')
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.querySelector("#clear-films")

// UI Objesi
// const ui = new UI()

// Storage Objesi
// const storage = new Storage()

eventListener()

function eventListener() {
  form.addEventListener("submit", addFilm)
  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmsFromLocalStorage()
    UI.loadAllFilms(films)
  })
  cardBody.addEventListener("click", deleteFilm)
  clear.addEventListener("click", clearAllFilms)
}

function addFilm(e) {
  const title = titleElement.value
  const director = directorElement.value
  const url = urlElement.value

  if ((title === "") || (director === "") || (url === "")) {
    UI.displayMessages("danger", "Tüm alanları doldurunuz 😠😠")
  } else {
    const newFilm = new Film(title, director, url)

    UI.addFilmToUI(newFilm)
    Storage.addFilmToLocalStorage(newFilm)
    UI.displayMessages("success", "Film başarılı bir şekilde eklendi 😇😇")
  }

  UI.clearInputs(titleElement, directorElement, urlElement)

  e.preventDefault()
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    if (confirm("Filmi kaldırmak istediğinizden emin misiniz?")) {
      UI.deleteFilmFromUI(e.target)
      Storage.deleteFilmFormLocalStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
      UI.displayMessages("success", "Film silme işlemi başarılı 😅😅")
    }
  }
}

function clearAllFilms() {
  if (confirm("Tüm filmleri silmek istediğinizden emin misiniz?")) {
    UI.clearAllFilmsFromUI()
    Storage.clearAllFilmFormLocalStorage()
  }
}






