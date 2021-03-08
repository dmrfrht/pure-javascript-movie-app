

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

UI.prototype.clearInputs = function(el1, el2, el3) {
  el1.value = ""
  el2.value = ""
  el3.value = ""
}