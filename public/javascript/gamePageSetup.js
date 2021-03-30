import { getById } from "../utility/api-tools.js"
var id;
var curScores;
var leaderboardUpdate;
window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  id = urlParams.get("id");
  setupGamePage();
  // Update the leaderboard in regular intervals
  leaderboardUpdate = setInterval(updateTop10ScoresAPI, 5000);
  // setTimeout(updateTop10Scores, 2000);
}

window.onuload = function () {
  window.clearInterval(leaderboardUpdate);
}

function updateTop10ScoresAPI() {
  getById('/game/getTop10Scores', id, (scores) => {
    if (JSON.stringify(curScores) != JSON.stringify(scores)) {
      updateTop10Scores(scores);
    }
  },
    () => console.log("ERROR getting game scores"));
}

function setupGamePage() {
  // Get then set the game info
  getById('/game/getShortDetails', id, setGameDetails,
    () => console.log("ERROR getting game info"));
  // Get then create leaderboard
  getById('/game/getTop10Scores', id, setTop10Scores,
    () => console.log("ERROR getting game scores"));

}

function updateTop10Scores(scores) {
  //curScores = scores;
  var tblRow = $("#leaderboardTbl > tbody > .tblRow").first();
  for (var i = 0; i < 10; i++) {
    tblRow.children(".initials").text(i < scores.length ? scores[i].initial : "---");
    tblRow.children(".score").text(i < scores.length ? scores[i].score : "0");
    tblRow = tblRow.next();
  }

  // for (var i = 1; i <= 10; i++) {
  //   var tblRow = $("<tr></tr>").attr("class", "tblRow");

  //   var rowNum = $("<td></td>").attr("class", "rowNum").text(i + ".");
  //   var initials = $("<td></td>").attr("class", "initials").text(i <= scores.length ? scores[i - 1].initial : "---");
  //   var score = $("<td></td>").attr("class", "score").text(i <= scores.length ? scores[i - 1].score : "0");
  // }
}

function setGameDetails(gameInfo) {
  //console.log(gameInfo)
  $("title:first").text(gameInfo[0].title);
  $("#gameTitle").text(gameInfo[0].title);
  $("#gameCreator").text("Made by: " + gameInfo[0].creator);
}

function setTop10Scores(scores) {
  //console.log(scores)
  curScores = scores;
  var leaderboard = $("#leaderboardTbl");
  for (var i = 1; i <= 10; i++) {
    var tblRow = $("<tr></tr>").attr("class", "tblRow");

    var rowNum = $("<td></td>").attr("class", "rowNum").text(i + ".");
    var initials = $("<td></td>").attr("class", "initials").text(i - 1 < scores.length ? scores[i - 1].initial : "---");
    var score = $("<td></td>").attr("class", "score").text(i - 1 < scores.length ? scores[i - 1].score : "0")

    tblRow.append(rowNum, initials, score);
    leaderboard.append(tblRow);
  }
}