const images = [
	"https://picsum.photos/id/1015/600/400",
	"https://picsum.photos/id/1025/600/400",
	"https://picsum.photos/id/1035/600/400",
	"https://picsum.photos/id/1045/600/400",
];

let current = 0;

const img = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.getElementById("dots");

images.forEach((_, index) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");

	dot.addEventListener("click", () => {
		current = index;
		updateSlider();
	});

	dots.appendChild(dot);
});

function updateSlider() {
	img.src = images[current];
	prev.style.display = current === 0 ? "none" : "inline-block";
	next.style.display = current === images.length - 1 ? "none" : "inline-block";

	document.querySelectorAll(".dot").forEach((dot, index) => {
		dot.classList.toggle("active", index === current);
	});
}

next.addEventListener("click", () => {
	if (current < images.length - 1) {
		current++;
		updateSlider();
	}
});

prev.addEventListener("click", () => {
	if (current > 0) {
		current--;
		updateSlider();
	}
});

updateSlider();
