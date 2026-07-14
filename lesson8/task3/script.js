const process = () => {
	let result = null;

	for (let i = 0; i <= 10; i++) {
		const userNumber = prompt("Введіть число більше 100");
		if (userNumber === null) {
			console.log("Введіть трьохзначне число");
			return;
		}

		const number = Number(userNumber);
		result = userNumber;

		if (!isNaN(number) && number > 100) {
			break;
		}
	}
	console.log(`Останнє число ${result}`);
};
process();
