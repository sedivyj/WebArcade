import { getById } from "../utility/api-tools.js"

window.onload = function () {
  getById("/game/getGames")

}

function loadGames(game) {
  console.log(game.id);
  console.log(game.filename);

}