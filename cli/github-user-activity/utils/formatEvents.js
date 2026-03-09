function formatEvents(events) {
    return events.map(event => {

        if (event.type === "PushEvent") {
            const commitCount = event.payload?.commits?.length;

            if (!commitCount) {
                return null;
            }

            const repoName = event.repo?.name || "unknown repository";

            return `Pushed ${commitCount} commit(s) to ${repoName}`;
        }

        else if (event.type === "WatchEvent") {
            const repoName = event.repo?.name || "unknown repository";

            return `Starred ${repoName}`;
        }
        else {
            return event.type;
        }

    }).filter(Boolean);
}


module.exports = formatEvents;
