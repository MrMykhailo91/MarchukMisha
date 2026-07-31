const inputText = document.querySelector(".input-text");
const addNewToDoButton = document.querySelector(".add-new-todo");
const todoList = document.querySelector(".todo-list");

addNewToDoButton.addEventListener("click", (event) => {
	event.preventDefault();
	const text = inputText.value.trim();

	if (text === "") return;

	const li = document.createElement("li");
	li.classList.add("to-do-item");

	const span = document.createElement("span");
	span.classList.add("todo-text");
	span.textContent = text;

	const button = document.createElement("button");
	button.type = "button";
	button.textContent = "Видалити";

	li.appendChild(span);
	li.appendChild(button);

	todoList.appendChild(li);

	inputText.value = "";
});

todoList.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		event.target.closest(".to-do-item").remove();
	}
});
