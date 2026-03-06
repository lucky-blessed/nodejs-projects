function formatEvents(events) {
    return events.map(event => {
        return event.type;
    });
}


module.exports = formatEvents;