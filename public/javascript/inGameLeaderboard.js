games = ['#frogger_score'] // replace with get games query
id = [1]
getLeaderboard(games[0], id[0], 10)

function getLeaderboard (idName, id, limit) {
  let score = $(idName)
  // console.log(id)
  // Function to run when the DOM is ready
  $(() => { toExpress() })
  function toExpress () {
    // FETCHING
    fetch(`/score/getGameHighScore/id/${id}/show/${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json()) // telling how to handle response
      .then((data) => { // function for handling successful return
        // score stored in data[0].score
        // console.log(data)
        let rank = 1
        for (score in data) {
          console.log(score)
          addScoreToLeaderboard(data[score], rank)
          rank += 1
        }
      })
      .catch(error => {
        score.text(error)
      }) // if bad call
  }
}

function addScoreToLeaderboard (score, rank) {
  /* Follow this format when creating each row from the database
        <tr class="tblRow">
          <td class="rowNum">#.</td>
          <td class="initials">[Initials]</td>
          <td class="score">[Score]</td>
        </tr>
    */
  const table = $('#leaderboardTbl')
  const row = $('<tr>').addClass('tblRow')
  const rowNum = $('<td>').addClass('rowNum').text(rank)
  const initials = $('<td>').addClass('initials').text(score.initial)
  const scoreValue = $('<td>').addClass('score').text(score.score)
  row.append(rowNum, initials, scoreValue)

  table.append(row)
  return table
}
