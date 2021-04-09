import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './navbar.jsx'
import GameOverlay from './components/GameOverlay'
import AllGames from './components/AllGames'
import About from './components/About'
import Home from './components/Home'
// import { getById } from './utility/api-tools.js'

// The Entire Application
function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameid, setGameid] = useState(0)
  //const [scores, setScores] = useState(new Array(10))
  //const [isBusy, setBusy] = useState(true)
  // const [gameData] = useState([''])

  // useEffect(() => {
  //   let isMounted = true
  //   const getScores = async () => {
  //     const scoresFromServer = await fetchScores(gameid < 1 && gameid > 3 ? 1 : gameid)
  //     if (isMounted) setScores(scoresFromServer)
  //     // setBusy(false)
  //     console.log(scoresFromServer)
  //     // setScores(scoresFromServer)
  //   }
  //   getScores()
  //   return () => { isMounted = false }

  // }, [])

  // useEffect(() => {
  //   if (scores.length !== 0 && scores[0]) {
  //     console.log(scores)
  //     setBusy(false)
  //     console.log('not busy anymore')
  //     scores.map((score) => { console.log(score.score) })
  //   }
  // }, scores)

  // const fetchScores = async (id) => {
  //   const res = await fetch(`/score/getGameHighScore/id/${id}/show/10`)
  //   const data = await res.json()
  //   return data
  // }

  // const fetchGames = async () => {
  //   const res = await fetch('/game/getGame')
  //   const data = await res.json()

  //   // console.log(data)
  //   return data
  // }

  // const fetchGame = async (id) => {
  //   const res = await fetch(`/game/getGame/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  const openOverlay = () => {
    setIsPlaying(true)
  }

  const closeOverlay = () => {
    setGameid(0)
    setIsPlaying(false)
    location.reload()
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

  setGame = (gameid) => {
    console.log("set game " + gameid)
    setGameid(gameid)
    //setScores(fetchScores(gameid))
    setIsPlaying(true)
  }

  if (/*isBusy*/ false) { return <p> please wait </p> } else {
    return (
      <div className="App">
        <NavBar
          isPlaying={isPlaying}
        />
        <br />
        <Home setGame={setGame} />
        <GameOverlay
          isPlaying={isPlaying}
          closeOverlay={closeOverlay}
          gameid={gameid}
        // scores={scores}
        />
        {/* <div className="text-center">
          <h1>Sorry!</h1>
          <p style={{ color: 'white' }}>
            This website is currently under construction. We are working hard to create a better
            experience for you all. Thank you for your patience! :)
            <br />-Web Arcade Dev Team
          </p>
          <button onClick={openOverlay}>Open Overlay</button>
          <Router>
            <div className='container'>
              <Route path='/' exact render={(props) => (
                <>
                  {!isPlaying && games.length > 0
                    ? <AllGames
                      games={games}
                    // onClick={() => onClick()}
                    />
                    : 'No Games to Show'
                  }
                </>
              )} />
              <Route path='/about' component={About} />
            </div>
          </Router>

        </div> */}
      </div>
    )
  }
}

export default App
