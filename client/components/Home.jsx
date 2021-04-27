import React, { Component } from 'react'
import { getFromAPI } from '../utility/api-tools'
import GameTile from './GameTile'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homePageReady: false,
      gameinfo: []
    }
  }

  componentDidMount() {
    getFromAPI('game/getGame', this.apiCallback, () => console.log('ERROR getting game info'))
  }

  apiCallback = (gameinformation) => {
    try {
      this.setState({
        homePageReady: true,
        gameinfo: gameinformation
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className = 'Home'>
    <img id='banner' src='images/banner/frogger_banner_two.jpg'/>
      <div className='container'>
        
        <div className='row'>
          {
            this.state.gameinfo.map((game, index) => (
              <GameTile setGame={this.props.setGame} key={index} gameid={game.gameid} title={game.title} filename={game.filename} />
            ))
          }
        </div>
      </div>
      </div>
    )
  }
}