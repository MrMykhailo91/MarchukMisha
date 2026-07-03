const user = {
	firstName: "Jonatan",
	age: "30",
	residence: "Bolgaria",
	userInfo: () => {
		console.log(`Привіт ${user.firstName}, тобі ${user.age},ти проживаєш у ${user.residence}`);
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
