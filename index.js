const nav = document.getElementById("nav");
const plusContact = document.getElementById("contact");
const logo = document.getElementById("logo");
const containerMenuOpened = document.getElementById("containerMenuOpened");
const menuOpened = document.getElementById("menuOpened");
const body = document.getElementsByTagName("body")[0];
const searchBox = document.getElementById("searchMenu");
const resultSearchBox = document.getElementById("resultSearch");
const noResult = document.getElementById("noResult");
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

//Function show searchBox
const openSearchBox = () => {
	searchBox.classList.toggle("d-none");
};

const products = [
	{
		nameBag: "Borsa piccola",
		img: "https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg",
		price: "1200,00 €",
	},
	{
		nameBag: "Borsa Grande",
		img: "https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg",
		price: "1200,00 €",
	},
	{
		nameBag: "Borsa media",
		img: "https://dmluxurybrands.com/wp-content/uploads/2021/09/2597438287.jpg",
		price: "1200,00 €",
	},
	{
		nameBag: "cintura",
		img: "https://s3.amazonaws.com/images.cumini.com/P24---gucci---411924+kgdhn9643.JPG",
		price: "1200,00 €",
	},
	{
		nameBag: "cintura marrone",
		img: "https://s3.amazonaws.com/images.cumini.com/P24---gucci---411924+kgdhn9643.JPG",
		price: "1200,00 €",
	},
	{
		nameBag: "cintura nera",
		img: "https://s3.amazonaws.com/images.cumini.com/P24---gucci---411924+kgdhn9643.JPG",
		price: "1200,00 €",
	},
];

//Function to filter prouducts end stamp in the resultSearchBox
const searchProducts = (value) => {
	let productsFiltered;
	if (value.trim() === "") {
		productsFiltered = [];
	} else {
		productsFiltered = products
			.filter((product) => {
				return product.nameBag.toLowerCase().includes(value.toLowerCase());
			})
			.slice(0, 6);

		resultSearchBox.innerHTML = "";
	}
	if (productsFiltered.length === 0) {
		noResult.innerText =
			"SPIACENTI, IMPOSSIBILE TROVARE RISULTATI CORRISPONDENTI ALLA TUA RICERCA";
	} else {
		noResult.innerText = "";
	}

	productsFiltered.forEach((product) => {
		let img = document.createElement("img");
		img.classList.add("sizeImg");
		img.src = product.img;
		resultSearchBox.appendChild(img);
	});
};
