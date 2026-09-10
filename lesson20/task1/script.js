$(document).ready(function () {
	const $form = $(".js--form");
	const $input = $(".js--form__input");
	const $todosWrapper = $(".js--todos-wrapper");

	let todos = JSON.parse(localStorage.getItem("todos")) || [];

	function saveTodos() {
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	function renderTodos() {
		$todosWrapper.empty();
		todos.forEach((todo) => {
			const $li = $("<li>").addClass("todo-item");
			if (todo.completed) {
				$li.addClass("todo-item--checked");
			}

			const $checkbox = $("<input>")
				.attr("type", "checkbox")
				.prop("checkbox", todo.completed);

			const $span = $("<span>")
				.addClass("todo-item__description")
				.text(todo.text);

			const $deleteButton = $("<button>")
				.addClass("todo-item__delete")
				.text("Видалити");

			$checkbox.on("change", () => {
				todo.completed = $checkbox.prop("checked");
				$li.toggleClass("todo-item--checked", todo.completed);
				saveTodos();
			});

			$deleteButton.on("click", () => {
				todos = todos.filter((item) => item.id !== todo.id);
				saveTodos();
				renderTodos();
			});

			$li.append($checkbox, $span, $deleteButton);
			$todosWrapper.append($li);
		});
	}

	$form.on("submit", (event) => {
		event.preventDefault();
		const text = $input.val().trim();
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
		$input.val("");
		$input.focus();
	});

	renderTodos();
});
