class Coach {
	constructor(firstName, specialization, rating) {
		this.firstName = firstName;
		this.specialization = specialization;
		this.rating = rating;
	}

	coachInfo() {
		console.log(
			`Coach: ${this.firstName}, Specialization: ${this.specialization}, Rating: ${this.rating}`,
		);
	}
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);
coach1.coachInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.coachInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"
