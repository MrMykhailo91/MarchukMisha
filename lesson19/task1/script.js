function updateWeather() {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=759f52b0f338d898baa61109663aaec7&units=metric",
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const date = new Date();
			const options = {
				month: "short",
				day: "numeric",
				year: "numeric",
			};
			const day = date.toLocaleDateString("en-US", {
				weekday: "short",
			});
			document.getElementById("dateDay").textContent =
				`${date.toLocaleDateString("en-US", options)} - ${day}`;

			navigator.getBattery().then(function (battery) {
				document.getElementById("batteryInfo").textContent =
					Math.round(battery.level * 100) + "%";
			});
			document.getElementById("realTime").textContent = date.toLocaleTimeString(
				"en-US",
				{
					hour: "2-digit",
					minute: "2-digit",
				},
			);
			document.getElementById("humidity").textContent =
				`Humidity: ${data.main.humidity}%`;

			document.getElementById("pressure").textContent =
				`Pressure: ${data.main.pressure} hPa`;
			const windSpeed = Math.round(data.wind.speed * 3.6);
			document.getElementById("wind").textContent = `Wind: ${windSpeed} km/h`;
			document.getElementById("temp").textContent =
				`${Math.round(data.main.temp)}°C`;
			document.getElementById("feelsLike").textContent =
				`Feels Like: ${Math.round(data.main.feels_like)}°C`;
			document.getElementById("condition").textContent =
				data.weather[0].description;
			const weatherIcon = document.getElementById("weatherIcon");
			const icon = data.weather[0].icon;
			if (icon === "01d") {
				weatherIcon.textContent = "☀️";
			} else if (icon === "01n") {
				weatherIcon.textContent = "🌙";
			} else if (icon === "02d" || icon === "02n") {
				weatherIcon.textContent = "⛅";
			} else if (icon === "03d" || icon === "03n") {
				weatherIcon.textContent = "☁️";
			} else if (icon === "04d" || icon === "04n") {
				weatherIcon.textContent = "☁️";
			} else if (icon === "09d" || icon === "09n") {
				weatherIcon.textContent = "🌧️";
			} else if (icon === "10d" || icon === "10n") {
				weatherIcon.textContent = "🌦️";
			} else if (icon === "11d" || icon === "11n") {
				weatherIcon.textContent = "⛈️";
			} else if (icon === "13d" || icon === "13n") {
				weatherIcon.textContent = "❄️";
			} else if (icon === "50d" || icon === "50n") {
				weatherIcon.textContent = "🌫️";
			}
			document.getElementById("timeInfo").textContent = date.toLocaleTimeString(
				"en-US",
				{
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
				},
			);
		});
}

document.querySelector(".update-box").addEventListener("click", () => {
	const icon = document.querySelector(".update-icon");
	if (icon) {
		icon.classList.remove("rotate");
		void icon.offsetWidth;
		icon.classList.add("rotate");
	}
	updateWeather();
	setInterval(updateWeather, 10 * 60 * 1000);
});
