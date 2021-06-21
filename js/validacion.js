/*funciones para validar el formulario*/
function validarFormulario(form1){


   
function validarLogin(loginForm){
	//validar el correo electrónico
	var loginC=loginForm.correo.value;
	var expresionCorreoL=/\w+\@+\w+\.+[a-z]/;
	if(!expresionCorreoL.test(loginC)){
	    Swal.fire({
		  icon: 'error',
		  title: 'problema en el correo!',
		  text: 'Algo salio mal!! Asegúrate de haber llenado correctamente'
		})
		return false
	} 

	Swal.fire('Excelente!','Has ingresado correctamente!','success');
    return true;

}


var password=loginForm.password;
	if(password.value=="" || password.value.length <8){
		Swal.fire(
		  'El password?',
		  'Tienes algún problema con el password??',
		  'question'
		)

		return false;
	} else{
		Swal.fire('Excelente!','Has ingresado correctamente!','success');
	}
	
    return true;


//Validar el usuario
	var usuario=form1.usuario;
	if(usuario.value==""){
		//alert("Debes ingresar un valor en el usuario!");


		Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Algo salio mal!! Asegúrate de haber llenado correctamente'
})

		document.getElementById("Alerta").innerHTML="Debes ingresar un valor en el usuario!";
		document.getElementById("Alerta").className="alert alert-warning";
		usuario.focus();
		usuario.select();
		return false;
	}
//validar contraseña 
var password=form1.password;
if(password.value=="" || password.value.lenght <8){
	
	Swal.fire({
  icon: 'Paaword',
  title: 'Oops...',
  text: 'Algo salio mal!! Asegúrate de haber escrito la contrseña correctamente'
})

	//alert("Debes ingresar correctamente el password");
	document.getElementById("Alerta").innerHTML="Debes ingresar correctamente el password!";
		document.getElementById("Alerta").className="alert alert-warning";

	password.focus();
	return false;
}


//validar el correo electrónico
	var correo=form1.email.value;
	var expresionCorreo=/\w+\@+\w+\.+[a-z]/;
	if(!expresionCorreo.test(correo)){
		//alert("Debes proporcionar un correo válido!");
		document.getElementById("Alerta").innerHTML="Debes proporcionar un correo válido!";
		document.getElementById("Alerta").className="alert alert-warning";

		return false
	} 

	//validar las tecnologias
var tecnologias=form1.tecnologia;
var checkSeleccionado=false;
//se revisa si hay un checkbox seleccionado
for (var i = 0; i < tecnologias.length; i++) {
	if(tecnologias[i].checked){
		checkSeleccionado=true;
	}
}
if(!checkSeleccionado){
	//alert("Debes seleccionar alguna tecnologia");
	document.getElementById("Alerta").innerHTML="Debes seleccionar alguna tecnologia";
    document.getElementById("Alerta").className="alert alert-warning";

	return false;
}

//Validar el genero de la persona
var genero=form1.genero;
var radioSeleccionado=false;
//revisar con un ciclo cual radio esta seleccionado
for (var i=0; i<genero.length; i++) {
	if (genero[i].checked) {
		radioSeleccionado=true;

	}
}
if (!radioSeleccionado){
	//alert("Debes seleccionar tu genero!");
	document.getElementById("Alerta").innerHTML="Debes seleccionar tu genero!";
    document.getElementById("Alerta").className="alert alert-warning";

	return false;
}

//VALIDAR OCUPACION 
let ocupacion=form1.ocupacion;
if(ocupacion.value==""){
	//alert ("Debes seleccionar una ocupacion!");
	document.getElementById("Alerta").innerHTML="Debes seleccionar una ocupacion!";
    document.getElementById("Alerta").className="alert alert-warning";

	return false
}






//CUANDO EL FORMULARIONES VALIDAADO

alert("El formulario está validado correctamente");
return true;





}