function capturar(){
    // obtenemos el valor de los elemento
    var xb = document.getElementById("xb").value;
    var xa = document.getElementById("xa").value;
	resultado = xb+xa;
	document.getElementById("resultado").value = resultado;
} 