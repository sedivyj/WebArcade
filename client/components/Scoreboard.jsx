import Score from './Score'
import React from 'react'

const Scoreboard = ({ scores }) => {
  return (
    <div id="leaderboardDiv">
        <table>
        <thead>
          <tr>
            <th colSpan="3">Leaderboard</th>
          </tr>
        </thead>
        <tbody>
          {scores && scores.map((score, rank) => (
              <Score key={score.scoreid} score={score} rank={rank + 1} />
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default Scoreboard
