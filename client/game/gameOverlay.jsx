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
        <h1>Game Overlay Exists!</h1>
        <button onClick={this.props.closeOverlay}>Close</button>
      </div>
    )
  }
}
