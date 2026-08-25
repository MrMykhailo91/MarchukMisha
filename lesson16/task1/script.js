class Student {
	constructor(firstName, lastName, yearBirth, grades) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.yearBirth = yearBirth;
		this.grades = grades;
		this.attendance = new Array(25).fill(null);
	}

	getAge() {
		const age = new Date().getFullYear();
		return age - this.yearBirth;
	}

	getAverageScore() {
		const summ = this.grades.reduce((acc, grades) => acc + grades, 0);
		return summ / this.grades.length;
	}
	setAttendance(presentCount, totalCount) {
		for (let i = 0; i < totalCount; i++) {
			this.attendance[i] = i < presentCount;
		}
	}
	present() {
		const emptyIndex = this.attendance.indexOf(null);
		if (emptyIndex !== -1) {
			this.attendance[emptyIndex] = true;
		} else {
			console.log(
				`${this.firstName}: Масив відвідуваності вже заповнений (25 занять).`,
			);
		}
	}

	absent() {
		const emptyIndex = this.attendance.indexOf(null);
		if (emptyIndex !== -1) {
			this.attendance[emptyIndex] = false;
		} else {
			console.log(
				`${this.firstName}: Масив відвідуваності вже заповнений (25 занять).`,
			);
		}
	}

	summary() {
		const avgGrade = this.getAverageScore(0, this.grades);

		const recorded = this.attendance.filter((v) => v !== null).length;
		if (recorded === 0) return "Редиска!";

		const presents = this.attendance.filter((v) => v === true).length;
		const avgAttendance = presents / recorded;

		if (avgGrade > 90 && avgAttendance > 0.9) {
			return "Молодець!";
		} else if (avgGrade > 90 || avgAttendance > 0.9) {
			return "Добре, але можна краще";
		} else {
			return "Редиска!";
		}
	}
}

const student1 = new Student("Ivan", "Subotin", 1995, [90, 95, 95, 91]);
const student2 = new Student("Petro", "Terkov", 1991, [95, 98, 97, 99]);
const student3 = new Student("Stepan", "Zibrov", 1987, [50, 88, 65, 36]);

student1.setAttendance(10, 10);
console.log(student1.firstName, student1.lastName);
console.log(student1.getAge() + `${" рік"}`);
console.log(student1.getAverageScore() + `${" балів"}`);
console.log(student1.summary());

console.log(student2.firstName, student2.lastName);
student2.setAttendance(9, 10);
console.log(student2.getAge() + `${" років"}`);
console.log(student2.getAverageScore() + `${" балів"}`);
console.log(student2.summary());

console.log(student3.firstName, student3.lastName);
student3.setAttendance(9, 10);
console.log(student3.getAge() + `${" років"}`);
console.log(student3.getAverageScore() + `${" балів"}`);
console.log(student3.summary());
