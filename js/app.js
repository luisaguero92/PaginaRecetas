
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fvalidation").addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('Nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito nada en el Nombre');
        Nombre.style.borderColor = '#ff0000';
    } else {
        Nombre.style.borderColor = '#008f39';
    }
    

    var clave1 = document.getElementById('Password1').value;
    if (clave1.length < 6) {
        alert('La clave no es válida');

        Password1.style.borderColor = '#ff0000'
        return;
    }

    var clave2 = document.getElementById('Password2').value;
    if (clave2.length < 6) {
        alert('La clave 2 no es válida');
        Password1.style.borderColor = '#008f39'
        Password2.style.borderColor = '#ff0000'
        return;
    }

    if(clave1 !== clave2){
        alert('La contraseñas no son iguales');
        return;
    }

    var direccion = document.getElementById('inputDireccion').value;
    if (direccion.length == 0) {
        alert('No has escrito nada en la Direccion');
        Password2.style.borderColor = '#008f39'
        inputDireccion.style.borderColor = '#ff0000';
        return;
    }

    var ciudad = document.getElementById('inputCity').value;
    if (ciudad.length == 0) {
        alert('No has escrito nada en la Ciudad');
        inputDireccion.style.borderColor = '#008f39';
        inputCity.style.borderColor = '#ff0000';
        return;
    }
    this.submit();
    alert("Muchas gracias por enviar el formulario");
}


/*
function valida_envia(){
    //valido el nombre
    if (document.fvalidation.Nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalidation.Nombre.focus()
           return 0;
    }
 
    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalidation.edad.value
    edad = validarEntero(edad)
    document.fvalidation.edad.value=edad
    if (edad==""){
           alert("Tiene que introducir un número entero en su edad.")
           document.fvalidation.edad.focus()
           return 0;
    }else{
           if (edad<18){
                  alert("Debe ser mayor de 18 años.")
                  document.fvalidation.edad.focus()
                  return 0;
           }
    }
 
    //valido el interés
    if (document.fvalidation.interes.selectedIndex==0){
           alert("Debe seleccionar un motivo de su contacto.")
           document.fvalidation.interes.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalidation.submit();
}
*/