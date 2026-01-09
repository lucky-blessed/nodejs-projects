// GitHub API client
const https = require("https");

function fetchUserActivity(username) {
    // implementation

    const url = `https://api.github.com/users/${username}/events`;

    const options = {
        headers: {
            "User-Agent": "nodejs-github-activity-cli",
            "Accept": "application/vnd.github+json"
        }
    };

    https.get(url, options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            console.log("Raw response data received:");
            console.log(data);
        });
        //console.log("Status Code:", res.statusCode);
    });
}







module.exports = { fetchUserActivity };