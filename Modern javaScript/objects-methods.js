let restaurant = {
	name : 'ABC',
	guestCapacity : 75,
	guestCount : 0,
	seatParty(count) {
		this.guestCount += count;
	},
	removeParty(count) {
		this.guestCount -= count;
	},
	checkAvailability(count) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		return count <= seatsLeft;
	}
}

restaurant.seatParty(60);
console.log(restaurant.checkAvailability(8));
