const request = require('request')

module.exports = {
    /*
        Module to assist with making API calls from the server.
        @Returns a promise which gets resolved or rejected based on the result
        from the API.
    */
    makeApiCall: url => (
        new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                // Handle errors
                if (err) reject(error)
                resolve(body)
            })
        })
    )
}