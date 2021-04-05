import React, { Component } from 'react'

export default class GameOverlay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="game-overlay" 
      style={{ 
        visibility: (this.props.isPlaying) ? 'visible' : 'hidden',
        opacity:  (this.props.isPlaying) ? 100 : 0
      }}
      >
        <button className="closeButton mt-4" onClick={this.props.closeOverlay}>
          X
        </button>
        <h1>Game Overlay Exists!</h1>
      </div>
    )
  }
}
