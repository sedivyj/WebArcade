import { getById } from '../utility/api-tools.js';

// Set up onclick for button when DOM is ready
$(()=> {
    $('#btn').on('click', toExpress)
})

// JQuery DOM Objects
let textBox = $('#text-box');
let output = $('#output');

// Function to run onclick
function toExpress() {
    const id = textBox.val();
    output.text('Fetching results...');
    getById('/test/testdbAPI', id, success, errfx);
}

function success(data) {
    output.text(JSON.stringify(data));
}

function errfx(err) {
    output.text(err);
}