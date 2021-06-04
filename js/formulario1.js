//Funcion para sumar dos numeros 
function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: " + sum)
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}

function resta(numero1,numero2){
	let n1,n2,res;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	res=n1-n2;
	alert("La resta es: " + res)
}

function multiplicacion(numero1,numero2){
	let n1,n2,mult;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	mult=n1*n2;
	alert("La resta es: " + mult)
}

function division(numero1,numero2){
	let n1,n2,div;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	div=n1/n2;
	alert("La division es: " + div)
	
}