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
   * @param {boolean} isPositve whether or not the player liked the game
   */
  vote(isPositve) {
    console.log(isPositve)
    const ratingData = {
      gameId: 1,
      positive: isPositve
    }
    postData('/game/rateGame', ratingData, this.voteSuccess, this.voteFail)
  }

  voteSuccess(response) {
    alert(`SUCCESS: ${response}`)
  }

  voteFail(err) {
    alert(`ERROR: ${err}`)
  }

  render() {
    const cssId = (this.props.isPositive) ? 'vote-up' : 'vote-down'
    const label = (this.props.isPositive) ? 'Loved!' : 'Hated!'
    return (
      <button 
        id={cssId}
        onClick={() => this.vote(this.props.isPositve)}>
        {label}
      </button>
    );
  }
}