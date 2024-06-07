const nav = document.getElementById("nav");
const plusContact = document.getElementById("contact");

//Function onScroll add e remove class
const toggleClassNav = () => {
	if (window.scrollY > 0) {
		nav.classList.add("bg-white", "text-dark");
		plusContact.classList.add("visible");
		nav.classList.remove("text-light");
		plusContact.classList.remove("invisible");
	} else {
		nav.classList.remove("bg-white", "text-dark");
		plusContact.classList.remove("visible");
		nav.classList.add("text-light");
		plusContact.classList.add("invisible");
	}
};

window.addEventListener("scroll", toggleClassNav);
