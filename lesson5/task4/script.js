let number = prompt("Введіть ціле число");
let prime = number > 1;
for (let i = 2; i < number; i++) {
	if (number % i === 0) {
		prime = false;
		break;
	}
}
alert(prime ? "Число є простим!" : "Число не є простим.");