const table = document.querySelector(".grid-table");
for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		const cell = document.createElement("div");
		cell.textContent = i * j;
		cell.classList.add("cell");
		table.append(cell);
	}
}
