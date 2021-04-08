import Score from './Score'
import React from 'react'

const Scoreboard = ({ scores }) => {
  return (
        <table>
        <thead>
        {scores && scores.map((score, rank) => (
            <Score key={score.scoreid} score={score} rank={rank + 1} />
        ))}
        </thead>
        </table>
  )
}

export default Scoreboard
