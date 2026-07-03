const user = {
	firstName: "Jonatan",
	age: "30",
	residence: "Bolgaria",
	userInfo: () => {
		console.log(`${user.firstName} , ${user.age}, ${user.residence}`);
	},
};
user.userInfo ();

// const user = {
// 	firstName: "Jonatan",
// 	age: "30",
// 	residence: "Bolgaria",
// };

// const values = Object.values(user);
// console.log(values);
