import React from 'react'
import GameComponent from './GameComponent'
import Scoreboard from './Scoreboard'
/**
 * This is the page where you can play the game and see your score on the side.
 */

const GameOverlay = ({ isPlaying, closeOverlay, gameid, scores }) => {
  // try to refactor in the old game page grid layout
  return (
      <div className={"game-overlay"}
        style={{
          visibility: (isPlaying) ? 'visible' : 'hidden',
          opacity: (isPlaying) ? 100 : 0
        }}
      >
      <button className="closeButton mt-4" onClick={closeOverlay}>X</button>
      <div className="grid-container">
        <div className="item1"><h1>Game Overlay Exists!</h1></div>
        <div className="item2"></div>
        <div className="item3"><GameComponent gameid={gameid} /></div>
        <div className="item4"></div>
        <div className="item5"></div>
      </div>
      <Scoreboard scores={scores}/>

      </div>

  )
}

export default GameOverlay
