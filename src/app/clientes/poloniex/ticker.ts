export class Ticker {
	constructor(
		public id?: number,
		public last?: number,
		public lowestAsk?: number,
		public highestBid?: number,
		public percentChange?: number,
		public baseVolume?: number,
		public quoteVolume?: number,
		public isFrozen?: number,
		public high24hr?: number,
		public low24hr?: number,
	) {}
}