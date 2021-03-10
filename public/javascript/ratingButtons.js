import { getById, postData } from '../utility/api-tools.js';
// TODO: Set up functionality for GETTING overall rating of game

/**
 * Sets up button click listeners when document is ready
 */
$(() => {
    getById('/game/getOveralRating', 1, overallRatingSuccess, overallRatingFail)
    
    const downVoteButton = $('#vote-down').click(downVote)
    const upVoteButton = $('#vote-up').click(upVote)
})

function overallRatingSuccess (data) {
    let percentSpan = $('#overall-rating')
    // Undefined Check
    if (data) {
        // Array check
        if(data.length > 0) {
            let percentage = data[0].positive_percent
            percentSpan.text(`${parseFloat(percentage).toFixed(2)}%`)
        } else {
            percentSpan.text(`No Ratings!`)
        }
    } else {
        percentSpan.text('ERROR')
    }
}

function overallRatingFail (error) {
    console.error(error);
}


/**
 * Function to call when a vote happens
 * @param {boolean} isPositve whether or not the player liked the game
 */
function vote(isPositve) {
    let rating = (isPositve) ? "LIKED" : "HATED";
    console.log(`The player ${rating} this game!`);
}

// Setting up callback functions for each button
const downVote = () => vote(false)
const upVote = () => vote(true)