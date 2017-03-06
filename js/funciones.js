//L
function capturar(){
	var valorL = contraccionLongitudP()*factorLorentz();
	document.getElementById("valorL").value = valorL;
} 

function factorLorentz(){
	var v = parseFloat(document.getElementById("velocidad").value);
	var c = 299792458;
	var d = (Math.pow(v,2)*Math.pow(c,2))/Math.pow(c,2);
	var k = Math.sqrt(Math.abs(1-d));
	console.log(k);
	return k;
}

function tiempoP (){
	var v = document.getElementById("v").value;
	var x = document.getElementById("x").value;
	var t = document.getElementById("t").value;
	var c = 299792458;
	var num = t - (v/Math.pow(c,2))*x;
	var tp = num/factorLorentz();

	document.getElementById("tp").value = tp;
}

//L de prima
function contraccionLongitudP(){
	var xb = document.getElementById("xb").value;
    var xa = document.getElementById("xa").value;
	resultado = parseFloat(xb)-parseFloat(xa);
	var valorLp = resultado/factorLorentz();
	document.getElementById("valorLp").value = valorLp;}
	return valorLp;
}

