import { getById, postData } from '../utility/api-tools.js';

/**
 * Sets up button click listeners when document is ready
 */
$(() => {
    getById('/game/getOveralRating', 1, overallRatingSuccess, overallRatingFail)
    // Set up buttons' onClick listeners
    $('#vote-down').click(downVote)
    $('#vote-up').click(upVote)
})

/**
 * Callback function that sets the percentage in HTML page and CSS styling
 * for the percentage text and buttons depending on the data returned
 * @param {object} data 
 */
function overallRatingSuccess (data) {
    // Undefined Check
    if (data) {
        let percentSpan = $('#overall-rating')
        // Check if percentage set and update color of text
        if(data.positivePercent) {
            let percentage = data.positivePercent
            let textColor = undefined
            if (percentage >= 70.0) {
                textColor = 'green'
            } else if (percentage >= 50.0 ) {
                textColor = 'yellow'
            } else {
                textColor = 'red'
            }
            percentSpan.text(`${parseFloat(percentage).toFixed(2)}%`).css('color', textColor)
        } else {
            // Percent wasn't defined -> There were no ratings
            percentSpan.text(`No Ratings!`).css('color', 'white')
        }
        // Check if game was previously rated
        if(!(data.wasPositive === undefined)) {
            styleButtons(data.wasPositive)
        }
    } else {
        percentSpan.text('ERROR')
    }
}

/**
 * Displays an alert of an error 
 * @param {string} error 
 */
function overallRatingFail (error) {
    console.error(error);
}

// Setting up callback functions for each button
const downVote = () => vote(false)
const upVote = () => vote(true)

/**
 * Function to call when a vote happens
 * @param {boolean} isPositve whether or not the player liked the game
 */
function vote(isPositve) {
    const ratingData = {
        gameId: 1,
        positive: isPositve
    }

    postData('/game/rateGame', ratingData, voteSuccess, voteFail)
}

/**
 * Handles when rating is a success
 * Disables buttons
 * @param {*} response 
 */
function voteSuccess(response) {
    styleButtons(response.wasPositive)
}

function styleButtons(wasPositive) {
    let downVoteButton = $('#vote-down')
    let upVoteButton = $('#vote-up')
    downVoteButton.prop('disabled', true)
    upVoteButton.prop('disabled', true)
    // Change button colors depending on the rating
    if(wasPositive) {
        upVoteButton.css('background-color', 'green')
        downVoteButton.css('background-color', 'grey')
    } else {
        upVoteButton.css('background-color', 'lightgreen')
        downVoteButton.css('background-color', 'grey')
    }
}

//
/**
 * Alerts user that they've rated the game before
 */
function voteFail() {
    alert("You've rated this before!")
}