#!/usr/bin/env node

const { fetchUserActivity } = require("../src/githubApi");

const username = process.argv[2];

if (!username) {
    console.log("Please provide a GitHub username.");
    process.exit(1);
}

fetchUserActivity(username);