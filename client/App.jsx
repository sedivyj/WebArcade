import React, { Component } from 'react'
import NavBar from './navbar.jsx'
import GameOverlay from './game/gameOverlay.jsx'
// import { getById } from './utility/api-tools.js'

// The Entire Application
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameData: '',
      isPlaying: false
    }

    // Binding these functions to this component's context
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  openOverlay() {
    this.setState({ isPlaying: true })
  }

  closeOverlay() {
    this.setState({ isPlaying: false })
  }

  // componentDidMount() {
  //   // Example of use the api-utility in react
  //   getById('test/testdbAPI', 1, this.success, this.fail)
  // }

  // // Using Arrow syntax caches the 'this' of the component
  // success = (data) => {
  //   console.log('OPE')
  //   console.log(data)
  //   this.setState({ gameData: data })
  // }

  // fail = (error) => {
  //   alert('FAIL')
  // }

  render() {
    return (
      <div className="App">
        <NavBar
          isPlaying={this.state.isPlaying}
        />
        <GameOverlay
          isPlaying={this.state.isPlaying}
          closeOverlay={this.closeOverlay}
        />
        <div className="text-center">
          <h1>Sorry!</h1>
          <p style={{ color: 'white' }}>
            This website is currently under construction. We are working hard to create a better
            experience for you all. Thank you for your patience! :)
            <br />-Web Arcade Dev Team
          </p>
          <button onClick={this.openOverlay}>Open Overlay</button>
        </div>
      </div>
    );
  }
}
