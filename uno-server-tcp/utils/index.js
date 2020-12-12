class EventsError extends Error {
    constructor (ok, message) {
        super()
        this.ok = ok
        this.message = message
    }
}

const shuffledPile = pile => pile.sort((a, b) => 0.5 - Math.random())

module.exports = {
    EventsError,
    shuffledPile
}
