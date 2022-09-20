let nombre = document.getElementById("validationServer01");
let apellido = document.getElementById("validationServer02");
let mail = document.getElementById("validationServer03");
let mensaje = document.getElementById("validationServer04")

let btnEnviar = document.getElementById("btnSubmit");
btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    

    if (nombre.value.length >= 3) { //validacion nombre
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else {
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }

    if (apellido.value.length >= 3) { //validacion apellido
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
    } else {
        apellido.classList.remove("is-valid");
        apellido.classList.add("is-invalid");
    }

    if (
        !(mail.validity.typeMismatch) //validación mail
        &&
        (mail.value.length >= 6)
    ){                               
        mail.classList.remove("is-invalid");
        mail.classList.add("is-valid");
    }else {
        mail.classList.remove("is-valid");
        mail.classList.add("is-invalid");
    }

    if (
        (mensaje.value.length >= 15) //validacion mensaje
        && 
        (mensaje.value.length <=140)
    ){ 
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add("is-valid");
    } else {
        mensaje.classList.remove("is-valid");
        mensaje.classList.add("is-invalid");
    }


});