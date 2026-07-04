const string = "hello world";
const letter = string.split("");
function strings(itemLetter, itemLetterTwo) {
	let result = letter.filter((item) => {
		if (item === itemLetter || item === itemLetterTwo) {
		} else {
			return true;
		}
	});
	console.log(result);
}
strings("d", "l");
