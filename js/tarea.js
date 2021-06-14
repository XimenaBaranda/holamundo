function numeromenor(numero1,numero2,numero3){
	let n1,n2,n3,men;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	n3=parseFloat(numero3);

	if(n1<n2){
		document.getElementById("numeromenor").innerHTML="<h1>el numero menor es: " + n1 +"</h1>";
	}else if(n2<n1){
		document.getElementById("numeromenor").innerHTML="<h1>el numero menor es: " + n2 +"</h1>";

	}else if(n3<n1){
		if(n3<n1)
			document.getElementById("numeromenor").innerHTML="<h1>el numero menor es: " + n3 +"</h1>";

	}
	
	
}

function semana(numero1){
	let op;
	op=parseFloat(numero1);
	switch(op){
		case 1:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "LUNES" +"</h1>";
		break;

	
		case 2:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "Martes" +"</h1>";
		break;	
	
		case 3:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "MIÉRCOLES" +"</h1>";
		break;
	
		case 4:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "JUEVES" +"</h1>";
		break;
	
		case 5:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "VIERNES" +"</h1>";
		break;

		case 6:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "SÁBADO" +"</h1>";
		break;
	
		case 7:
		document.getElementById("semana").innerHTML="<h1>El dia es: " + "DOMINGO" +"</h1>";
		break;				

	}
	

	
}

function edad(numero1){
	let edad;
	edad=parseFloat(numero1);

	if(edad<=3){
		document.getElementById("edad1").innerHTML="<h1>ERES UN BEBE</h1>";
	}else if(edad>3&&edad<13){
		document.getElementById("edad1").innerHTML="<h1>ERES UN NIÑO</h1>";

	}else if(edad>13&&edad<18){
        document.getElementById("edad1").innerHTML="<h1>ERES UN DOLOSCENTE</h1>";

	}else{
		 document.getElementById("edad1").innerHTML="<h1>ERES ADULTO</h1>";

	}
	
	
	
}

function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: " + sum)
	//document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
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