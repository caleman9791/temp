// crearCookie(GALLETA.nombre, GALLETA.valor, GALLETA.diasExpiracion);
// existeCookie(GALLETA.nombre);
// eliminarCookie(GALLETA.nombre);
var USER = {
	name: "MICHELE",
	value: "LEG0IsF7WHPMkaBwOyXWUX8Ea7FZq",
	days: 30,
	pass: "LEG0IsF7WHPMkaBwOyXWUX8Ea7FZq",
};
// var GALLETA = {
// 	name: "MICHELE",
// 	value: "LEG0IsF7WHPMkaBwOyXWUX8Ea7FZq",
// 	days: 30,
// 	pass: "LEG0IsF7WHPMkaBwOyXWUX8Ea7FZq",
// };
var GALLETA = {};
GALLETA = USER;
var MAIN = {};
var PASS = {};

PASS.pass = "LEG0IsF7WHPMkaBwOyXWUX8Ea7FZq";

// deleteCookie(GALLETA.name);
// setCookie(GALLETA.name, GALLETA.value, GALLETA.days);

function fun_Inicio(arguments) {

	MAIN.btn_pass.addEventListener("click", function() {

		if (MAIN.txt_pass.value == PASS.pass) {
			setCookie(GALLETA.name, GALLETA.value, GALLETA.days);

			MAIN.menu.setAttribute("style", "display: block !important");
			MAIN.inicio.setAttribute("style", "display: none !important");
			MAIN.benvenida.setAttribute("style", "display: block !important");

			if (getCookie(GALLETA.name)) {
				console.log("GALLETA EXISTE");
			}

		}

	});
	console.log('ESTAS EN EL INICIO');
	if (getCookie(GALLETA.name)) {
		console.log("GALLETA EXISTE");
		MAIN.main.setAttribute("style", "display: block !important");
		MAIN.menu.setAttribute("style", "display: block !important");
		MAIN.inicio.setAttribute("style", "display: none !important");
		MAIN.benvenida.setAttribute("style", "display: block !important");

	} else {

		console.log("GALLETA NO EXISTE");
		MAIN.main.setAttribute("style", "display: block !important");
		MAIN.menu.setAttribute("style", "display: hidden !important");
		MAIN.inicio.setAttribute("style", "display: block !important");
		MAIN.benvenida.setAttribute("style", "display: none !important");

	}

}

function fun_Otra(arguments) {
	console.log('NO ESTAS EN EL INICIO');
	if (getCookie(GALLETA.name)) {
		MAIN.main.setAttribute("style", "display: block !important");
	} else {
		console.log("GALLETA NO EXISTE");
		let url = "./index.html";
		window.location.href = url;

	}
}

window.onload = function(arguments) {
	console.log("PAGINA CARGADA");
	gfg_Run();
	verCOOKE()
	// openDB()
	// MAIN.cuerpo == document.querySelector(".main");
	MAIN.main = document.getElementById("main");
	MAIN.txt_pass = document.getElementById("txt_pass");
	MAIN.btn_pass = document.getElementById("btn_pass");
	MAIN.menu = document.querySelector(".menu");
	MAIN.inicio = document.querySelector(".inicio");
	MAIN.benvenida = document.querySelector(".benvenida");
	// MAIN.xxxxxxx == document.querySelector(".xxxxx");
	// MAIN.xxxxxxx == document.querySelector(".xxxxx");

	let atributos = MAIN.main.getAttribute("class");
	// console.log(atributos);
	const valor = atributos.split(" ");

	if (valor.length == 2) {

		fun_Inicio();

	} else {
		fun_Otra();
	}
}

// for (var i = 0; i < valor.length; i++) {
// 	console.log(valor[i]);
// }