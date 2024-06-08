const nav = document.getElementById("nav");
const plusContact = document.getElementById("contact");
const logo = document.getElementById("logo");

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
