const name = (num) => (item) => {
	return num * item;
};
const result = name(5)(2);
console.log(result);
