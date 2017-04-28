export interface Ticker {
    id:              number,
    pair:            string,
    quoteVolume:     number,
    high24hr:        number,
    highestBid:      number,
    last:            number,
    low24hr:         number,
    lowestAsk:       number,
    percentChange:   number,
    baseVolume:      number,
    isFrozen:        number
}