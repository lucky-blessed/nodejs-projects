function formatEvents(events) {
    return events.map(event => {

        if (event.type === "PushEvent") {
            const commitCount = event.payload.commits.length;
            const repoName = event.repo.name;

            return `Pushed ${commitCount} commit(s) to ${repoName}`;
        }

        return event.type;
    });
}


module.exports = formatEvents;