import React, { Component, useState, useEffect } from 'react'
import { getById } from '../utility/api-tools'

// This function loads the game script dynamically to the webpage
const loadGameScript = (filename, callback) => {
  console.log("Load game script", filename)
  const existingScript = document.getElementById('gamescript')

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = 'gamejs/' + filename + '.js'
    script.type = 'text/javascript'
    script.id = 'gamescript'
    console.log(script)
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
  console.log("api callback", gameinfo);
  loadGameScript(gameinfo[0].filename, () => {
    try {
      if (this.setState) {
        this.setState({ gameScriptReady: true })
      }
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
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    // If gameid is greater than zero make a call to the database to load the game script, otherwise unload it
    console.log("game component update " + this.props.gameid)
    if (this.props.gameid > 0) {
        getById('/game/getGame', this.props.gameid, apiCallback, () => console.log('ERROR getting game info'))
    } else {
      unloadGameScript()
    }
  }

  componentWillUnmount() {
    console.log("game component unmount " + this.props.gameid)
    unloadGameScript()
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
