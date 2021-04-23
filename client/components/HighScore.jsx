import React, { useState, useEffect } from 'react'
import HighScoreTile from './HighScoreTile.jsx'

import { getFromAPI } from '../utility/api-tools.js'

function HighScore (props) {
  const [gameMaxScores, setGameMaxScores] = useState([])

  useEffect(() => {
    if (gameMaxScores.length === 0) {
      getFromAPI('/score/getAllHighScores', setGameScoresSuccess, setGameScoresFail)
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
    <>
    <div className='hsbanner'>
      <img id='score' src='images/banner/High-Score-4k_trimmed.gif'/>
    </div>
    <div className='container'>
      <div className='row test'>
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
    </div>
    </>
  )
}

export default HighScore
