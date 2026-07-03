const phoneBook = {
	contact: [
		{ id: 1, firstName: "Ivan", tel: "0991223230", email: "ivan@gmail.com" },
		{ id: 2, firstName: "Petro", tel: "0998885599", email: "petro@gmail.com" },
		{ id: 3, firstName: "Vasyl", tel: "0998885522", email: "vasyl@gmail.com" },
	],
	// все що нижче за допомогою ші
	findByName(name) {
		return this.contact.find(
			(contact) => contact.firstName.toLowerCase() === name.toLowerCase(),
		);
	},

	addContact(firstName, tel, email) {
		const newId =
			this.contact.length > 0
				? this.contact[this.contact.length - 1].id + 1
				: 1;
		const newContact = {
			id: newId,
			firstName: firstName,
			tel: tel,
			email: email,
		};
		this.contact.push(newContact);
		return newContact;
	},
};
phoneBook.addContac("Anna", "0951112233", "anna@gmail.com");
console.log("Оновлена телефонна книга:", phoneBook.contact);

const foundContact = phoneBook.findByName("Petro");
console.log("Знайдений контакт:", foundContact);
