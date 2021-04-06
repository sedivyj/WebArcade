import React, { Component } from 'react'
import { postData } from '../utility/api-tools.js'

/**
 * Button Component for Rating
 * @param {boolean} isPositive does the button do a positive or negative rating
 */
export default class RatingButton extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Function to call when a vote happens
   * @param {boolean} isPositive whether or not the player liked the game
   */
  vote(isPositive) {
    console.log(isPositive)
    const ratingData = {
      gameId: 1,
      positive: isPositive
    }
    postData('/game/rateGame', ratingData, this.voteSuccess, this.voteFail)
  }

  voteSuccess(response) {
    console.log(response)
    alert(`SUCCESS: ${response}`)
  }

  voteFail(err) {
    console.log(err.toString())
    alert(`ERROR: ${err.message}`)
  }

  render() {
    const cssId = (this.props.isPositive) ? 'vote-up' : 'vote-down'
    const label = (this.props.isPositive) ? 'Loved!' : 'Hated!'
    return (
      <button 
        id={cssId}
        onClick={() => this.vote(this.props.isPositive)}>
        {label}
      </button>
    );
  }
}