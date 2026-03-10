function formatEvents(events) {

    const pushCounts = {};
    const results = [];

    events.forEach(event => {
        if (event.type === "PushEvent") {
            const repoName = event.repo?.name || "unknown repository";
            
            if (!pushCounts[repoName]) {
                pushCounts[repoName] = 0;
            }

            pushCounts[repoName]++;
        }

        else if (event.type === "WatchEvent") {
            const repoName = event.repo?.name || "unknown repository";
            results.push(`Starred ${repoName}`);
        }

        else if (event.type === "CreateEvent") {
            const repoName = event.repo?.name || "unknown repository";
            const refType = event.payload?.ref_type || "something";

            results.push(`Created ${refType} in ${repoName}`);
        }

        else if (event.type === "ForkEvent") {
            const repoName = event.repo?.name || "unknown repository";
            results.push(`Forked ${repoName}`);
        }
    });

    for (const repo in pushCounts) {
        results.unshift(`Pushed ${pushCounts[repo]} time(s) to ${repo}`);
    }

    return results;
   
}


module.exports = formatEvents;
