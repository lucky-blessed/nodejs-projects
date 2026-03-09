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

        else if (event.type === "ForkEvent") {
            const repoName = event.repo?.name || "unknown repository";

            return `Forked ${repoName}`;
        }

        else if (event.type === "CreateEvent") {
            const repoName = event.repo?.name || "unknown repository";
            const refType = event.payload?.ref_type || "something";

            return `Created ${refType} in ${repoName}`;
        }
        else {
            return null;
        }

    }).filter(Boolean);
}


module.exports = formatEvents;
