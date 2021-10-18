
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fvalidation").addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('Nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito nada en el Nombre');
        Nombre.style.borderColor = '#ff0000';
        return;
    }
    

    var clave1 = document.getElementById('Password1').value;
    if (clave1.length < 6) {
        alert('Ingrese una contraseña');
        Nombre.style.borderColor = '#008f39'; 
        Password1.style.borderColor = '#ff0000'
        return;
    }

    var clave2 = document.getElementById('Password2').value;
    if (clave2.length < 6) {
        alert('Repita la contraseña');
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
        alert('Ingrese una Direccion');
        Password2.style.borderColor = '#008f39'
        inputDireccion.style.borderColor = '#ff0000';
        return;
    }

    var ciudad = document.getElementById('inputCity').value;
    if (ciudad.length == 0) {
        alert('Ingrese una Ciudad');
        inputDireccion.style.borderColor = '#008f39';
        inputCity.style.borderColor = '#ff0000';
        return;
    }

    if(!this.form.checkbox.checked)
    {
        alert('You must agree to the terms first.');
        return false;
    }
    
    this.submit();
    alert("Muchas gracias por enviar el formulario");
}


