import React, { Component, useState, useEffect } from 'react'
import { getById } from '../utility/api-tools'

const loadGameScript = (filename, callback) => {
  console.log("Load game script")
  const existingScript = document.getElementById('gamescript')

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = 'gamejs/' + filename + '.js'
    script.type = 'text/javascript'
    script.id = 'gamescript'
    console.log(script)
    //const phaser = document.createElement('script')
    // phaser.src = 'gamejs/phaser.min.js'
    // phaser.type = 'text/javascript'
    // phaser.id = 'phaser'
    document.body.appendChild(script)

    script.onload = () => {
      if (callback) callback()
    }
  }

  if (existingScript && callback) callback()
}

const unloadGameScript = () => {
  const existingScript = document.getElementById('gamescript')

  if (existingScript) {
    existingScript.remove()
  }
}

function apiCallback(gameinfo) {
  console.log("api call")
  loadGameScript(gameinfo[0].filename, () => {
    try {
      this.setState({ gameScriptReady: true })
    } catch (err) {
      console.log(err)
    }
  })
}

export default class GameComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameScriptReady: false,
    }
    console.log("game component constructor " + this.props.gameid)
    // const [gameScriptReady, setgameScriptReady] = useState(false)
  }
  // Depricated?
  // changeGame(gameid) {
  //   this.setState(gameid, (gameid) => {
  //     return {
  //       gameScriptReady: false,
  //       gameid: gameid
  //     }
  //   })
  // }

  componentDidMount() {
<<<<<<< HEAD
    if (this.props.gameid) {
      getById('/game/getGame', this.props.gameid, apiCallback, () => console.log('ERROR getting game info'))
    }
=======
    // console.log("game component mount " + this.props.gameid)
    // if (this.props.gameid > 0) {
    //   getById('/game/getGame', this.props.gameid, apiCallback, () => console.log('ERROR getting game info'))
    // }
  }

  componentDidUpdate() {
    //if gameid is different unload old script and load new script
    console.log("game component update " + this.props.gameid)
    if (this.props.gameid > 0) {
      getById('/game/getGame', this.props.gameid, apiCallback, () => console.log('ERROR getting game info'))
    } else {
      unloadGameScript()
    }

    //if new gameid is undefined unload old script
  }

  componentWillUnmount() {
    console.log("game component unmount " + this.props.gameid)
    unloadGameScript()
>>>>>>> 2b41e0d270287924b4af1f680a13081e9392ec5b
  }

  render() {
    console.log("game component render " + this.props.gameid)
    return (
      <div className="game-component"
        style={{ textAlign: 'center', alignContent: 'center' }}>

        <span id="game" style={{ display: 'table', margin: '0 auto' }}></span>

      </div>
    )
  }
}