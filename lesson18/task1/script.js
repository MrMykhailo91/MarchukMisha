let time = 7588;
const timer = document.getElementById("timer");
const interval = setInterval(() => {
	renderFunction();
}, 1000);

const renderFunction = () => {
	if (time < 0) {
		clearInterval(interval);
		return;
	}
	const hours = Math.floor(time / 3600);
	const min = Math.floor((time % 3600) / 60);
	const sec = time % 60;

	let hoursO = hours < 10 ? "0" + hours : hours;
	let minO = min < 10 ? "0" + min : min;
	let secO = sec < 10 ? "0" + sec : sec;
	timer.textContent = `${hoursO}:${minO}:${secO}`;
	time--;
};
