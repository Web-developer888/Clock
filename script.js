const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
	const day = new Date();
	const hh = day.getHours() * 30;
	const mm = day.getMinutes() * deg;
	const ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

// Set initial clock and update every second
setClock();
setInterval(setClock, 1000);

const switchTheme = (evt) => {
	const switchBtn = evt.target;
	if (switchBtn.textContent.toLowerCase() === "light") {
		switchBtn.textContent = "Dark";
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		switchBtn.textContent = "Light";
		document.documentElement.setAttribute("data-theme", "light");
	}
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme);
