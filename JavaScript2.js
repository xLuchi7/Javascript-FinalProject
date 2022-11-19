let modooo = localStorage.getItem("modo");
let mailIniciar = document.getElementById("mail-iniciar");
let contraIniciar = document.getElementById("contraa-iniciar");
let enterIniciar = document.getElementById("enter-iniciar");
let formulario = document.getElementById("formulario");
let mail = false;
let contra = false;
let iniciarSesion = sessionStorage.getItem("status");
iniciarSesion = "no-registrado";
sessionStorage.setItem("status", iniciarSesion);

darkWhite();


function darkWhite() {
    if (modooo === "blanco") {
        document.getElementById("header-iniciar").style.backgroundColor="white";
        document.getElementById("titulo-iniciar").style.color="black";
        document.getElementById("main-iniciar").style.backgroundColor="white";
        document.getElementById("h2-iniciar").style.color="black";
        document.getElementById("correo-iniciar").style.color="black";
        document.getElementById("contra-iniciar").style.color="black";
    }
}

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let validarEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    console.log(mailIniciar.value);
    console.log(contraIniciar.value);
    if (!validarEmail.test(mailIniciar.value)) {
        document.getElementById("check").style.display="none";
        document.getElementById("valid").style.display="none";
        document.getElementById("cross").style.display="block";
        document.getElementById("no-valid").style.display="block";
        mail = false;
        console.log("mail: "+mail);
    }else{
        document.getElementById("cross").style.display="none";
        document.getElementById("no-valid").style.display="none";
        document.getElementById("check").style.display="block";
        document.getElementById("valid").style.display="block";
        mail = true;
        console.log("mail: "+mail);
    }
    if (contraIniciar.value.length < 5) {
        document.getElementById("checkk").style.display="none";
        document.getElementById("contra-valid").style.display="none";
        document.getElementById("crosss").style.display="block";
        document.getElementById("contra-no-valid").style.display="block";
        contra = false;
        console.log("contra: "+contra);
    }else{
        document.getElementById("checkk").style.display="block";
        document.getElementById("contra-valid").style.display="block";
        document.getElementById("crosss").style.display="none";
        document.getElementById("contra-no-valid").style.display="none";
        contra = true;
        console.log("contra: "+contra);
    }
    if (mail == true && contra == true) {
          Swal.fire({
            title: 'Inicio de sesion exitoso',
            icon: 'success',
            focusConfirm: false,
            confirmButtonText:
            '<a class="alerta" href="../index.html">Volver a Inicio</a>',
          })
        iniciarSesion = "registrado";
    }else{
        iniciarSesion = "no-registrado";
    }
    sessionStorage.setItem("status", iniciarSesion);
    console.log(contraIniciar.value.length);
}

