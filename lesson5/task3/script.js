const number = prompt("Введіть ціле цисло.");
let numberTwo = number * number;
for (let i = 1; i <= 100; i++) {
	if (i === numberTwo) break;
	{
		console.log(i);
	}
}
