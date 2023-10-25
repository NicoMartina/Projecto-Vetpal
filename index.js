//FORMULARIO DE CONTACTO

let form = document.getElementById("form");

function enviarForm() {
	alert("as evniado el formulario exitosamente!");
}

//BURGER MENU
var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
	this.classList.toggle("close");
	overlay.classList.toggle("overlay");
});

//SEARCH BAR

//FETCH DATA

fetchData("C:UsersStartklarDesktopProjecto-Vetpal-maindata.js").then((res) => {
	console.log(res);
});
