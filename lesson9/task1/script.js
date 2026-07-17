let ladder = {
	counter: 0,
	up: function () {
		this.counter = this.counter + 1;
		return this;
	},
	down: function () {
		this.counter = this.counter - 1;
		return this;
	},
	showStep: function () {
		console.log(this.counter);
	},
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
