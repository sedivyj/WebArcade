import React, { Component } from 'react'
import Score from './Score'
import { getByIdLimit } from '../utility/api-tools'

export default class Scoreboard_v2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: []
    }
  }

  apiCallback (scores) {
    try {
      this.setState({
        scores: scores
      })
    } catch (err) {
      console.log(err)
    }
  }

  updateScores () {
    if (this.props.gameid > 0) {
      getByIdLimit('/score/getGameHighScore', this.props.gameid, 10, this.apiCallback, () => console.log('ERROR getting scores'))
    }
  }

  componentDidMount() {
    this.updateScoresInterval = setInterval(
      () => this.updateScores(),
      5000
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.gameid > 0) {
      if (prevState.data !== this.state.data) {
        this.updateScores();
      }
    }
    else {
      this.setState({
        scores: []
      })
    }
  }

  componentWillUnmount () {
    clearInterval(this.updateScoresInterval);
  }

  createTableRows () {
    const rows = []
    for (let i = 0; i < this.state.scores.length; i++) {
      rows.push(<Score key={i} score={this.state.scores[i]} rank={i + 1} />)
    }
    for (let i = this.state.scores.length; i < 10; i++) {
      rows.push(<Score key={i} score={{ initial: '---', score: 0 }} rank={i + 1} />)
    }
    return rows
  }

  render () {
    return (
      <div id="leaderboardDiv">
        <table>
          <thead>
            <tr>
              <th colSpan="3">Leaderboard</th>
            </tr>
          </thead>
          <tbody>
            {
              this.createTableRows()
            }
          </tbody>
        </table>
      </div>
    )
  }
}