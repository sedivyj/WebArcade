import React, { Component } from 'react'
import { postData } from '../utility/api-tools.js'

/**
 * Button Component for Rating
 * @param {boolean} isPositive does the button do a positive or negative rating
 */
export default class RatingButton extends Component {
  constructor (props) {
    super(props)

    this.styleButtons = this.styleButtons.bind(this)
  }

  /**
   * Function to call when a vote happens
   * @param {boolean} isPositive whether or not the player liked the game
   */
  vote (isPositive) {
    const ratingData = {
      gameId: this.props.gameid,
      positive: this.props.isPositive
    }
    postData('/game/rateGame', ratingData, this.voteSuccess, this.voteFail)
  }

  voteSuccess = () => {
    this.props.setPercentagePostRate()
    // this.styleButtons()
    alert('SUCCESS')
  }

  voteFail = () => {
    alert('FAIL')
  }

  styleButtons (forcedUpdate) {
    // Check if it was rated
    if (this.props.wasPositive !== null) {
      // Previous rating positive
      if (this.props.wasPositive) {
        // Is this a positive rating button
        return (this.props.isPositive) ? 'green' : 'grey'
      } else {
        // Previous rating was negative
        // Is this a negative rating button
        return (!(this.props.isPositive)) ? 'red' : 'grey'
      }
    } else { // There was no previous rating
      return (this.props.isPositive) ? 'lightgreen' : 'lightred'
    }
  }

  render () {
    const cssId = (this.props.isPositive) ? 'vote-up' : 'vote-down'
    const label = (this.props.isPositive) ? 'Loved!' : 'Hated!'
    return (
      <button
        className='btn'
        style={{ backgroundColor: this.styleButtons() }}
        disabled = {(this.props.wasPositive !== null)}
        id={cssId}
        onClick={() => this.vote(this.props.isPositive)}>
        {label}
      </button>
    );
  }
}
