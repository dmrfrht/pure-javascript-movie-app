function UI() {
}

UI.prototype.addFilmToUI = function (newFilm) {
  const filmList = document.querySelector("#films")
  filmList.innerHTML += `
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
  `
}

UI.prototype.clearInputs = function (el1, el2, el3) {
  el1.value = ""
  el2.value = ""
  el3.value = ""
}

UI.prototype.displayMessages = function (type, message) {
  const cardBody = document.querySelectorAll(".card-body")[0]
  const div = document.createElement("div")
  div.className = `alert alert-${type}`
  div.textContent = `${message}`

  cardBody.appendChild(div)

  setTimeout(function() {
    div.remove()
  }, 2500)
}