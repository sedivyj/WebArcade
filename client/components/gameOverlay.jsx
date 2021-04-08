import React, { Component } from 'react'
import GameComponent from './gameComponent'

/**
 * This is the page where you can play the game and see your score on the side.
 */
export default class GameOverlay extends Component {
  constructor(props) {
    super(props)
  }
  //try to refactor in the old game page grid layout
  render() {
    return (
      <div className="game-overlay"
        style={{
          visibility: (this.props.isPlaying) ? 'visible' : 'hidden',
          opacity: (this.props.isPlaying) ? 100 : 0
        }}
      >
        <button className="closeButton mt-4" onClick={this.props.closeOverlay}>X</button>
        <div className="grid-container">
          <div className="item1"><h1>Game Overlay Exists!</h1></div>
          <div className="item2"></div>
          <div className="item3"><GameComponent gameid="2" /></div>
          <div className="item4"></div>
          <div className="item5"></div>

        </div>
      </div>

    )
  }
}
