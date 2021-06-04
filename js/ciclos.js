//Condicionales if-else
var a=10;
var b=12;

//IDENTIFICAR EL NUM MAYOR 
if (a>b) {
	document.write("El número mayor es: " + a);
}else{
	document.write("El número mayor es: " + b);
}

document.write("<br>");
//CICLO FOR 
//Números del 0 al 10

for (var i = 0; i < 11; i++) {
	document.write(i);
}

document.write("<br>");

//CICLO WHILE 

var i=0;
while (i <11){
	document.write(i);
	i++;
}

document.write("<br>");

//CICLO DO WHILE
var x=0;
do{
document.write(x);
x++;
}while (x <11);

document.write("<br>");

//SELECCION MULTIPLE 
//CASOS O SWITCH
//VALIDAR SI UN NÚMERO ENTRE 1 Y 4 1= HIJO 2= HIJA 3= PADRE 4=MADRE

var familia=4;
switch(familia){
  case 1:
  document.write("Eres hijo");
  break;
 case 2:
  document.write("Eres hija");
  break;
   case 3:
  document.write("Eres padre");
  break;
   case 4:
  document.write("Eres madre");
  break;
  default:
  document.write("La opción no se encontro en el rango de valores");





}






