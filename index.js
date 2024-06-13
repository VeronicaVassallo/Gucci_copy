const nav = document.getElementById("nav");
const plusContact = document.getElementById("contact");
const logo = document.getElementById("logo");
const containerMenuOpened = document.getElementById("containerMenuOpened");
const menuOpened = document.getElementById("menuOpened");
const body = document.getElementsByTagName("body")[0];
const searchBox = document.getElementById("searchMenu");

//Function onScroll add e remove class
const toggleClassNav = () => {
	if (window.scrollY > 0) {
		nav.classList.add("bg-white", "text-dark");
		plusContact.classList.add("visible");
		logo.classList.remove("logoAnimationReverse");
		logo.classList.add("logoAnimation");
		nav.classList.remove("text-light");
		plusContact.classList.remove("invisible");
	} else {
		nav.classList.remove("bg-white", "text-dark");
		plusContact.classList.remove("visible");
		nav.classList.add("text-light");
		plusContact.classList.add("invisible");
		logo.classList.remove("logoAnimation");
		logo.classList.add("logoAnimationReverse");
	}
};

window.addEventListener("scroll", toggleClassNav);

//Function show menu opened
const openMenu = () => {
	containerMenuOpened.classList.toggle("showMenuOpened");
	menuOpened.classList.toggle("d-none");
	body.classList.toggle("hiddenOverflow");
};

//Function show searchBar
const openSearchBox = () => {
	debugger;
	searchBox.classList.toggle("d-none");
};
