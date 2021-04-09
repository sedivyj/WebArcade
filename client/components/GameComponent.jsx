import React, { Component, useState, useEffect } from 'react'
import { getById } from '../utility/api-tools'

const loadGameScript = (filename, callback) => {
  const existingScript = document.getElementById('gamescript')

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = 'gamejs/' + filename + '.js'
    script.type = 'text/javascript'
    script.id = 'gamescript'
    document.body.appendChild(script)

    script.onload = () => {
      if (callback) callback()
    }
  }

  if (existingScript && callback) callback()
}

function apiCallback(gameinfo) {
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
    this.state = { gameScriptReady: false }
    // const [gameScriptReady, setgameScriptReady] = useState(false)
  }

  componentDidMount() {
    getById('/game/getGame', this.props.gameid, apiCallback, () => console.log('ERROR getting game info'))
  }

  render() {
    return (
      <div className="game-component"
        style={{ textAlign: 'center', alignContent: 'center' }}>

        <span id="game" style={{ display: 'table', margin: '0 auto' }}></span>

      </div>
    )
  }
}
