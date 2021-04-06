import React, { Component } from 'react'

export default class GameComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game-component">
        <span id="game"></span>
        <script type="text/javascript" src="../../public/gamejs/FrogGame.js"></script>
        <script type="text/javascript" src="../../public/gamejs/phaser.min.js"></script>
      </div>
    )
  }
}