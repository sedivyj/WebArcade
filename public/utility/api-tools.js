// API UTILITIES FOR MAKING API CALLS EASIER

/**
 * Asynchronous function that fetches data (GET) by id from server endpoint
 * @param {string} endpoint API endpoint to call GET request
 * @param {number} id id of value to get from endpoint
 * @param {function} cb_success callback function to call with a good response
 * @param {function} cb_error callback function to call with bad response
 */
export async function getById(endpoint, id, cb_success, cb_error) {
    // Make the fetch and await the response
    const response = await fetch(`${endpoint}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Check if status of response was good
    if (response.ok) {
        const data = await response.json();
        cb_success(data); // Run Callback with retrieved data
    } // If a bad response -> check if error callback is defined and run it
    else {
        console.error(`An error has occured: ${response.status}`);
        if (cb_error) { cb_error(); }
    }
}

/**
 * Asynchronous function that sends data (POST) to server endpoint.
 * Data gets turned into JSON string for call 
 * @param {string} endpoint API endpoint to call POST request
 * @param {object} data JS object to POST
 * @param {function} cb_success callback function to call with a good response
 * @param {function} cb_error callback function to call with bad response
 */
export async function postData(endpoint, data, cb_success, cb_error) {
    // Make the fetch and await the response
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // Check if status of response was good
    if (response.ok) {
        const data = await response.json();
        cb_success(data); // run callback with data
    } // If a bad response -> check if error callback is defined and run it
    else {
        console.error(`An error has occured: ${response.status}`);
        if (cb_error) { cb_error(); }
    }
}