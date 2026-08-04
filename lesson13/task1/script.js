const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	let isValid = true;

	document
		.querySelectorAll(".error")
		.forEach((error) => (error.textContent = ""));
	document.querySelectorAll("input, textarea").forEach((field) => {
		field.classList.remove("error-input");
	});

	const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄє' -]{2,}$/;
	const phoneRegex = /^\+380\d{9}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!nameRegex.test(nameInput.value.trim())) {
		showError(nameInput, "Введіть коректне ім'я");
		isValid = false;
	}

	if (messageInput.value.trim().length < 5) {
		showError(messageInput, "Повідомлення має містити мінімум 5 символів");
		isValid = false;
	}

	if (!phoneRegex.test(phoneInput.value.trim())) {
		showError(phoneInput, "Телефон повинен починатися з +380 і містити 9 цифр");
		isValid = false;
	}

	if (!emailRegex.test(emailInput.value.trim())) {
		showError(emailInput, "Введіть коректний Email");
		isValid = false;
	}

	if (isValid) {
		console.log({
			name: nameInput.value.trim(),
			message: messageInput.value.trim(),
			phone: phoneInput.value.trim(),
			email: emailInput.value.trim(),
		});

		alert("Повідомлення успішно відправлено!");

		form.reset();
	}
});

function showError(input, message) {
	input.classList.add("error-input");
	input.nextElementSibling.textContent = message;
}
