const form = document.querySelector("#film-form")
const titleElement = document.querySelector('#title')
const directorElement = document.querySelector('#director')
const urlElement = document.querySelector('#url')

// UI Objesi
const ui = new UI()

// Storage Objesi
const storage = new Storage()

eventListener()

function eventListener() {
  form.addEventListener("submit", addFilm)
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






