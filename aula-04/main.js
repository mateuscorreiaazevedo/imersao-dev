function newFilm() {
  var film = document.getElementById("new-film").value;
  var filmTitle = document.getElementById("new-film-title").value;
  if (film.endsWith(".jpg")) {
    filtList(film, filmTitle);
  } else {
    console.error("erro");
  }

  document.getElementById("new-film").value = "";
  document.getElementById("new-film-title").value = "";
}
function filtList(film, filmTitle) {
  var filmElement = "<img src=" + film + ">";
  var poster = document.getElementById("poster");
  var posterTitle = document.getElementById("title-poster");
  poster.innerHTML = poster.innerHTML + filmElement;
  posterTitle.innerHTML = posterTitle.innerHTML + filmTitle;
}
