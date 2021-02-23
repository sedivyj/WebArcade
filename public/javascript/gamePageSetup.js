function setupGamePage() {
  var gameid = 1;
  // Define variables with place holder data
  var gameInfo = getGameInfo(gameid); // Assumes controller returns results as 2d array
  var top10Scores = getTop10Scores(gameid); // Assumes controller returns results as 2d array
  //
  document.getElementById("gameTitle").innerText = gameInfo[0][0];
  document.getElementById("gameCreator").innerText = "Made by: " + gameInfo[0][1];
  var leaderboard = document.getElementById("leaderboardTbl");
  for (var i = 1; i <= 10; i++) {
    var tblRow = document.createElement("tr");
    tblRow.setAttribute("class", "tblRow");

    var rowNum = document.createElement("td");
    rowNum.setAttribute("class", "rowNum");
    rowNum.innerText = i + ".";
    tblRow.appendChild(rowNum);

    var initials = document.createElement("td");
    initials.setAttribute("class", "initials");
    initials.innerText = top10Scores[i - 1][0];
    tblRow.appendChild(initials);

    var score = document.createElement("td");
    score.setAttribute("class", "score");
    score.innerText = top10Scores[i - 1][1];
    tblRow.appendChild(score);

    leaderboard.appendChild(tblRow);
  }
}

function getGameInfo(gameid) {
  return [["Frogger", "Seth Schalinske"]];  // TODO: Replace with calls to database controller
}

function getTop10Scores(gameid) {
  return [["ZPG", 499],  // TODO: Replace with calls to database controller
  ["AJY", 498],
  ["GRA", 498],
  ["JAU", 497],
  ["EMR", 497],
  ["KIR", 497],
  ["JHT", 497],
  ["JDX", 497],
  ["BZB", 496],
  ["FBZ", 496]];
}