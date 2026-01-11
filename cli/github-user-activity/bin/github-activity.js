#!/usr/bin/env node

const { fetchUserActivity } = require("../src/githubApi");

const username = process.argv[2];

if (!username) {
    console.error("Please provide a GitHub username.");
    process.exit(1);
}

console.log(`Fetching activity for ${username}...\n`);


fetchUserActivity(username)
.then((events) => {
    console.log("Raw parsed events:");
    console.log(events);
})
.catch((error) => {
    console.error("Error", error.message);
});