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

function findAllSalaries(anyCompany) {
  const salaries = [];
  JSON.stringify(anyCompany, (key, value) => {
    if (key === "salary") {
      salaries.push(value);
    }
    return value;
  });

  return salaries.reduce((sum, item) => sum + item, 0);
}

console.log(findAllSalaries(company));