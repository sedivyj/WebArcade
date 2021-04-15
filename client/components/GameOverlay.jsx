import React, { useState, useEffect } from 'react'
import GameComponent from './GameComponent'
import RatingComponent from './RatingComponent'
import Scoreboard from './Scoreboard'
import Scoreboard_v2 from './Scoreboard_v2'

import { getById } from '../utility/api-tools.js'
/**
 * This is the page where you can play the game and see your score on the side.
 */

const GameOverlay = ({ isPlaying, closeOverlay, gameid, scores }) => {
  // try to refactor in the old game page grid layout
  const [positivePercentage, setPositivePercentage] = useState(0)

  useEffect(() => {
    if(gameid !== 0) {
      getById('/game/getOverallRating', gameid, setPercentage)
    }
  }, [isPlaying])

  const setPercentage = (response) => {
    console.log(response.positivePercent)
    setPositivePercentage(response.positivePercent)
  }

  return (
    <div className={'game-overlay'}
      style={{
        visibility: (isPlaying) ? 'visible' : 'hidden',
        opacity: (isPlaying) ? 100 : 0
      }}
    >
      <button className="closeButton mt-4" onClick={closeOverlay}>X</button>
      <div className="grid-container">
        <div className="item1"><h1>Game Overlay Exists!</h1></div>
        <div className="item2"><Scoreboard_v2 gameid={gameid} /></div>
        <div className="item3"><GameComponent gameid={gameid} /></div>
        <div className="item4">
          <RatingComponent
            positivePercentage={positivePercentage}
          />
        </div>
        <div className="item5"></div>
      </div>
    </div>

  )
}

export default GameOverlay
