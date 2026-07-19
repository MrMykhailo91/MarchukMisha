let company = {
	sales: [
		{ name: "John", salary: 1000 },
		{ name: "Alice", salary: 600 },
	],
	development: {
		web: [
			{ name: "Peter", salary: 2000 },
			{ name: "Alex", salary: 1800 },
		],
		internals: [{ name: "Jack", salary: 1300 }],
	},
};

// Варіант 1
const resultSales = company.sales.reduce((acc, item) => {
	const salarySales = item.salary;
	acc += salarySales;
	return acc;
}, 0);

const resultDevelopmentWeb = company.development.web.reduce((acc, item) => {
	const salaryDevelopmentWeb = item.salary;
	acc += salaryDevelopmentWeb;
	return acc;
}, 0);

const resultDevelopmentInternals = company.development.internals.reduce(
	(acc, item) => {
		const salaryDevelopmentInternals = item.salary;
		acc += salaryDevelopmentInternals;
		return acc;
	},
	0,
);

const resultSalary =
	resultSales + resultDevelopmentWeb + resultDevelopmentInternals;
console.log(resultSalary);

// Варіант 2
const allEmployees = [
	...company.sales,
	...company.development.web,
	...company.development.internals,
];

const totalSalary = allEmployees.reduce(
	(sum, employee) => sum + employee.salary,
	0,
);

console.log(totalSalary);
