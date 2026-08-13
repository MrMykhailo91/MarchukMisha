const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");
console.log(form);
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
	todosWrapper.innerHTML = "";
	todos.forEach((todo) => {
		const li = document.createElement("li");
		li.classList.add("todo-item");
		if (todo.completed) {
			li.classList.add("todo-item--checked");
		}

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = todo.completed;

		const span = document.createElement("span");
		span.classList.add("todo-item__description");
		span.textContent = todo.text;

		const deleteButton = document.createElement("button");
		deleteButton.classList.add("todo-item__delete");
		deleteButton.textContent = "Видалити";

		checkbox.addEventListener("change", () => {
			todo.completed = checkbox.checked;
			li.classList.toggle("todo-item--checked", todo.completed);
			saveTodos();
		});

		deleteButton.addEventListener("click", () => {
			todos = todos.filter((item) => item.id !== todo.id);
			saveTodos();
			renderTodos();
		});

		li.append(checkbox, span, deleteButton);
		todosWrapper.appendChild(li);
	});
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const text = input.value.trim();
	if (!text) {
		return;
	}

	const newTodo = {
		id: Date.now(),
		text: text,
		completed: false,
	};

	todos.push(newTodo);
	saveTodos();
	renderTodos();
	input.value = "";
	input.focus();
});

renderTodos();
