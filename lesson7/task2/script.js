const data = [-3, 2, undefined, 0, 22, true, null, 55];
function numerical(acc, items) {
	const result = data.filter((arr) => {
		if (typeof arr === "number") return true;
	});
	console.log(result);
	const sum = result.reduce((arr, item) => {
		arr += item;
		return arr;
	}, 0);
	console.log(sum);
}
numerical();
console.log(sum);
