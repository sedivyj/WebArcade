import { getById } from "../utility/api-tools.js"

window.onload = function () {
  setupIndex();
}

function setupIndex() {
  getById("/game/getAllGames", 0, (games) => {
    loadGames(games);
  });
}

function loadGames(games) {
  for (var i = 0; i < games.length; i++) {
    var thumbsrc = "images/thumbnail/" + games[i].filename + "Thumbnail.jpg";
    var img = $("<img>").attr({ "class": "gameThumbNail", "src": thumbsrc, "alt": games[i].title });
    var lnkhref = "game_page.html?id=" + games[i].gameid + "&game=" + games[i].filename;
    var lnk = $("<a></a>").attr({ "href": lnkhref, "title": "Play " + games[i].title + "!" }).append(img);
    var td = $("<td></td>").attr({ "id": i, "class": "gameLink" }).append(lnk);
    $("#popGameRow").append(td);
    // var dot = $("<span></span>").attr({ "class": "dot", "onclick": "currentSlide(" + i + ")" });
    // $("#dots").append(dot);
  }
}