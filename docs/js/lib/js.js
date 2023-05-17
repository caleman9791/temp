function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1, cookie.length);
		}
		if (cookie.indexOf(nameEQ) === 0) {

			return true;
			// return cookie.substring(nameEQ.length, cookie.length);
		}
	}
	return null;
}

function deleteCookie(name) {
	setCookie(name, "", -1);
}

// // Establecer una cookie
// setCookie("miCookie", "miValor", 7); // La cookie expirará en 7 días

// // Obtener el valor de una cookie
// var valor = getCookie("miCookie");

// // Eliminar una cookie
// deleteCookie("miCookie");

function generateP() {
	var pass = '';
	var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
	// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 1; i <= 30; i++) {
		var char = Math.floor(Math.random() *
			str.length + 1);

		pass += str.charAt(char)
	}

	return pass;
}

function gfg_Run() {
	// console.log('pass');
	// console.log('');
	// console.log(generateP());
	// console.log('');
	// console.log('pass');
}

// function verCOOKE() {

// 	// let name = cname + "=";
// 	let decodedCookie = decodeURIComponent(document.cookie);
// 	let ca = decodedCookie.split(';');
// 	for (let i = 0; i < ca.length; i++) {
// 		// console.log('COOKEE #' + i + ' ===');
// 		// console.log(ca[i]);
// 		// console.log('');
// 		// console.log('');
// 	}

// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }