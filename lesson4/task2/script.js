const number = prompt("Введіть трьохзначне число");
if (number === null) {
	alert("Ви скасували введення числа");
} else if (number.length !== 3) {
	alert("Введіть трьохзначне число без помилок");
} else {
}

const numberOne = number[0];
const numberTwo = number[1];
const numberThree = number[2];

if (numberOne == numberTwo && numberTwo == numberThree) {
	alert("Так, всі числа однакові.");
} else {
	alert("Ні, числа неоднакові");
}

if (
	numberOne == numberThree ||
	numberOne == numberTwo ||
	numberTwo == numberThree
) {
	alert("Так, однакові цифри в числі є.");
} else {
	alert("Ні, однакових цифр серед числа не має");
}
