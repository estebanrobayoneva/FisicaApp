function capturar(){
    // obtenemos el valor de los elemento
    var xb = document.getElementById("xb").value;
    var xa = document.getElementById("xa").value;
	resultado = parseInt(xb)+parseInt(xa);
	document.getElementById("resultado").value = resultado;
} 

function factorLorentz (){
	var v = document.getElementById("v").value;
	var c = 3 * 10^8;
	var k = Math.pow(1-(v^2/c^2));
	return k;
}

function tiempo (){
	var v = document.getElementById("v").value;
	var x = document.getElementById("x").value;
	var t = document.getElementById("t").value;
	var c = 3 * 10^8;
	var tp = t-factorLorentz();
	document.getElementById("tp").value = tp;
}



function contraccion(){
	// obtenemos el valor de los elemento
    var v = parseFloat(document.getElementById("v").value);
	var c = 300000000;
	var r = Math.abs(1-(v*v));
	var k = Math.sqrt(r);
	resultado = k;
	document.getElementById("resultado").value = resultado;
}