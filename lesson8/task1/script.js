const process = (callback) => {
	const result = 0;
	return callback(result);
};
const sum = process((data) => {
	let total = 0;
	total = total + data;
	return (num) => {
		total = total + num;
		return total;
	};
});

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
