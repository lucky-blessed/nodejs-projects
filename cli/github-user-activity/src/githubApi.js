// GitHub API client
const https = require("https");


function fetchUserActivity(username) {
    const url = `https://api.github.com/users/${username}/events`;

    const options = {
        headers: {
            "User-Agent": "nodejs-github-activity-cli",
            "Accept": "application/vnd.github+json"
        }
    };

    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = "";

            if (res.statusCode !== 200) {
                reject(new Error(`GitHub API responded with status ${res.statusCode}`));
                res.resume();
                return;
            }

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (error) {
                    reject(new Error("Failed to parse GitHub response"));
                }
            });
        }).on("error", (err) => {
            reject(new Error("Network error: " + err.message));
        });
    });
}




module.exports = { fetchUserActivity };