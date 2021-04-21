import React, { useState, useEffect } from 'react'
import HighScoreTile from './HighScoreTile.jsx'

import { getFromAPI } from '../utility/api-tools.js'

function HighScore (props) {
  const [gameMaxScores, setGameMaxScores] = useState([])

  useEffect(async () => {
    if (gameMaxScores.length === 0) {
      await getFromAPI('/score/getAllHighScores', setGameScoresSuccess, setGameScoresFail)
    }
  }, [])

  const setGameScoresSuccess = (data) => {
    console.log(data)
    setGameMaxScores(data)
  }

  const setGameScoresFail = (error) => {
    console.log(error)
  }

  return (
    <div className='hspage'>
      <div className='hsbanner'>
        <img src='images/banner/High-Score-4k_trimmed.gif'/>
      </div>
      {gameMaxScores.map((gameScore) => {
        return (
          <HighScoreTile
            key={gameScore.gameid}
            title={gameScore.title}
            filename={gameScore.filename}
            maxScore={gameScore.maxScore}
            initial={gameScore.initial}
          />
        )
      })}
    </div>
  )
}

export default HighScore
