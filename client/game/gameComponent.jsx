import React, { Component } from 'react'
import useScript from '../utility/loadGameScript'

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { gameScriptReady: false };
  }

  componentWillMount() {
    loadGameScript(() => {
      this.setState({ gameScriptReady: true });
    });
  }

  render() {
    return (
      <div className="game-component">
        <span id="game"></span>
        {this.}
        <script type="text/javascript" src="gamejs/phaser.min.js"></script>
      </div>
    )
  }
}