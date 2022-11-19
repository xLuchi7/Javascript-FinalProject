let modoooo = localStorage.getItem("modo");
let formulario = document.getElementById("formulario");
let mailIniciar = document.getElementById("mail-iniciar");
let contraIniciar = document.getElementById("contraa-iniciar");
let confirmarContra = document.getElementById("confirmar-contra");
let enterIniciar = document.getElementById("enter-iniciar");
let mail = false;
let contra = false;
let confirmContra = false;
let registro = sessionStorage.getItem("status");
registro = "no-registrado";
sessionStorage.setItem("status", registro);

cambiarDarkWhite();

function cambiarDarkWhite() {
    if (modoooo === "blanco") {
        document.getElementById("header-reg").style.backgroundColor="white";
        document.getElementById("titulo-reg").style.color="black";
        document.getElementById("main-reg").style.backgroundColor="white";
        document.getElementById("h2-reg").style.color="black";
        document.getElementById("correo-reg").style.color="black";
        document.getElementById("contra-reg").style.color="black";
        document.getElementById("confirmar-reg").style.color="black";
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

    if (contraIniciar.value.length < 5) {
        document.getElementById("checkkk").style.display="none";
        document.getElementById("crossss").style.display="block";
        document.getElementById("confirmar-valid").style.display="none";
        document.getElementById("contra-no-validd").style.display="block";
        confirmContra = false;
        console.log("confrimar contra: "+confirmContra);
    }else{
        if (confirmarContra.value != contraIniciar.value) {
            document.getElementById("checkkk").style.display="none";
            document.getElementById("crossss").style.display="block";
            document.getElementById("confirmar-valid").style.display="none";
            document.getElementById("confirmar-no-valid").style.display="block";
            document.getElementById("contra-no-validd").style.display="none";
        }else{
            document.getElementById("checkkk").style.display="block";
            document.getElementById("crossss").style.display="none";
            document.getElementById("confirmar-valid").style.display="block";
            document.getElementById("confirmar-no-valid").style.display="none";
            confirmContra = true;
            console.log("confirmar contra: "+confirmContra);
        }
    }
    if (mail == true && contra == true && confirmContra == true) {
        console.log("entre")
        Swal.fire({
          title: 'Registrado exitosamente',
          icon: 'success',
          focusConfirm: false,
          confirmButtonText:
          '<a class="alerta" href="../index.html">Volver a Inicio</a>',
        })
        registro = "registrado";
    }else{
        registro = "no-registrado";
    }
    sessionStorage.setItem("status", registro);
    console.log(contraIniciar.value.length);
}