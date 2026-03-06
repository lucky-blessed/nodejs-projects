#!/usr/bin/env node

const { fetchUserActivity } = require("../src/githubApi");
const formatEvents = require("../utils/formatEvents");

const username = process.argv[2];

if (!username) {
    console.error("Please provide a GitHub username.");
    process.exit(1);
}

console.log(`Fetching activity for ${username}...\n`);


fetchUserActivity(username)
.then((events) => {
    const formatedEvents = formatEvents(events);

    formatedEvents.forEach(event => {
        console.log(`- ${event}`);
    })
})
.catch((error) => {
    console.error("Error", error.message);
});