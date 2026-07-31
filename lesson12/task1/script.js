let link = "";

document.getElementById("save").onclick = () => {
	link = prompt("Введіть посилання:");
};

document.getElementById("go").onclick = () => {
	if (link) {
		window.open(link, "_blank");
	} else {
		alert("Спочатку введіть посилання!");
	}
};
