let boton = document.getElementById("mode");
let principal = document.getElementById("principal");
let modoo = localStorage.getItem("modo");
let sol = document.getElementById("sol");
let tituloo = document.querySelectorAll('h5.white');
let texto = document.querySelectorAll('p.white');
let cards = document.querySelectorAll('div.card');
let header = document.getElementById("header");
let subTitulos = document.querySelectorAll('th.hola');
let total = 0;
let cont = 0;
let botonn = document.querySelectorAll('button.boton');
let precioo = [];
precioo = document.querySelectorAll('h5.precio');
let tituloCurso = [];
tituloCurso = document.querySelectorAll('h5.titulo-curso');
let nombreCurso = [];
let numero = 0;
let producto;
let descuento = -20;
let adentro = [];
let recienCerrado = false;
let dolarBluee;
let ver;
let registro = sessionStorage.getItem("status");
let cerrarSesion = document.getElementById("cerrar");
let cerrarSesion2 = document.getElementById("cerrarr");
let cantCursos = cards.length;
let cantPorCuatro = cantCursos * 4;

//no use este metodo con JSON pero lo dejo para demostrar que se como se hace
//preferi agarrar del html con querySelectorAll y usar for. 
//sigue siendo dinamico que era lo que pedia la consigna, en vez de agregar texto en JSON
//agregas otra card y es exactamente lo mismo pq el querySelector agarra todo.
obtenerCursosJSON();

estadoRegistro();

traerDolar();

totalPagar(total);

itemsCarrito();

renderizarColor();

DarkWhiteMode();

obtenerPrecio();

obtenerNombreCurso();

finalizarCompra();

finalizarSesion();

console.log("cant cards: ", cantCursos);

function finalizarSesion() {
    cerrarSesion.onclick = () =>{
        registro = "no-registrado";
        sessionStorage.setItem("status", registro);
        recienCerrado = true;
    }
    cerrarSesion2.onclick = () =>{
        registro = "no-registrado";
        sessionStorage.setItem("status", registro);
        recienCerrado = true;
    }
    
    if (recienCerrado == true) {
        console.log("se cerro sesion")
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sesion cerrada exitosamente',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          })
    }
}

function finalizarCompra() {
    let terminar = document.getElementById("terminar");
    terminar.onclick = () =>{
        if (total == 0) {
            Swal.fire(
                'Sin cursos en el carrito',
                'Agrega al menos 1 curso al carrito',
                'info'
            )
        }else{
            document.getElementById("carrito").innerHTML="";
            let totalDolares = total / dolarBluee;
            totalDolares = Math.round(totalDolares);
            Swal.fire({
                title: 'Comprar '+ cont +' Cursos',
                html:
                    'Total a pagar en pesos: ' + total +
                    '<br/>'+
                    'Total a pagar en dolares: '+ totalDolares +
                    '<br/>'+  
                    '<br/>'+  
                    '<select name="Pesos">'+
                    '<option value="">Pesos</option>'+
                    '<option value="">USD</option>'+
                    '<br/>',
                showCloseButton: true,
                confirmButtonText:
                '<a id="confirmar-compra">Comprar ahora</a>',
                footer: 'Valor dolar blue: ' + dolarBluee
            })
            let confirmar = document.getElementById("confirmar-compra");
            confirmar.onclick = () =>{
                Toastify({
                    text: "Pronto recibira un mail de confirmacion con los detalles de la compra",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    destination: "../index.html",
                    style: {
                        background: "linear-gradient(to right, orange, rgb(165, 110, 9))",
                    },
                }).showToast();
            }
            total = 0;
            totalPagar(total);
            descuento = -20;
            cont = 0;
        }
}
}

function estadoRegistro() {
    if (registro === "registrado") {
        console.log("registrado");
    }else{
        console.log("no registrado");
    }
    
    if (registro === "registrado") {
        document.getElementById("i-sesion").style.display="none";
        document.getElementById("registrarse").style.display="none";
    }else{
        document.getElementById("no-regsitrado").style.display="none";
    }
}

function totalPagar(total) {
    let totalAPagar = document.getElementById("total");
    totalAPagar.innerHTML = "Total a Pagar: $"+total;
    console.log(total);
}

function obtenerPrecio() {
    for (let i = 0; i < cantCursos; i++) {
        adentro[i]= precioo[i].innerHTML;
        console.log(adentro[i]);
    }
}

function obtenerNombreCurso() {
    for (let i = 0; i < cantCursos; i++) {
        nombreCurso[i] = tituloCurso[i].innerHTML;
        console.log(nombreCurso[i]);
    }
}

function itemsCarrito() {
    for (let i = 0; i < cantCursos; i++) {
        botonn[i].onclick = () =>{
            console.log("registro: ", registro);
            if (registro == null || registro == "no-registrado") {
                Swal.fire(
                    'Inicia Sesion antes de comprar',
                    'Aprovecha que hay descuentos!',
                    'warning'
                )
            }else{
                if (cont >= 6) {
                    Swal.fire(
                        'No puede agregar mas de 6 cursos al carrito',
                        'Aprovecha los descuentos!',
                        'warning'
                    )
                }else{
                    cont = cont + 1;
                    console.log("Compras: "+cont);
                    numero = i + 1;
                    producto = document.getElementById(""+numero);
                    descuento = descuento + 20;
                    if (descuento === 120) {
                        descuento = descuento - 20;
                    }
                    let porcentaje = 100;
                    porcentaje = (100 - descuento) / 100;
                    console.log(porcentaje);
        
                    if (modoo == "fondo-main") {
                        nuevo = document.getElementById("carrito").innerHTML += `
                        <tr>
                            <td class="cambio hola">${nombreCurso[i]}</td>
                            <td class="cambio hola">${descuento}%</td>
                            <td class="cambio hola">$${adentro[i] * porcentaje}</td>
                        </tr>
                        `;
                    }else{
                        nuevo = document.getElementById("carrito").innerHTML += `
                        <tr>
                            <td class="cambio chau">${nombreCurso[i]}</td>
                            <td class="cambio chau">${descuento}%</td>
                            <td class="cambio chau">$${adentro[i] * porcentaje}</td>
                        </tr>
                        `;
                    }
            
                    total = total + (adentro[i] * porcentaje);
                    totalPagar(total);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: ''+nombreCurso[i]+' fue agregado exitosamete al carrito',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                    })
                }
            }
        }
    }
}

function renderizarColor() {

    if (modoo === "fondo-main") {
        document.getElementById("titulo").style.color="white";
        document.getElementById("i-sesion").style.color="white";
        header.style.backgroundColor="rgb(41, 37, 37)";
        principal.classList.remove("blanco");
        principal.classList.add("fondo-main");
        document.getElementById("sol").style.display = "block";
        document.getElementById("luna").style.display = "none";
        document.getElementById("titulo-carrito").style.color = "white";
        document.getElementById("total").style.color = "white";
        document.getElementById("footer").style.backgroundColor = "rgb(31, 29, 29)";
        document.getElementById("carrito").style.backgroundColor = "rgb(31, 29, 29)";
        document.getElementById("persona").style.display="block";
        document.getElementById("persona2").style.display="none";
        for (let i = 0; i < cantCursos; i++) {
            cards[i].classList.remove("blanco-claro");
            cards[i].classList.add("gris-oscuro");
        }
        for (let i = 0; i < cantPorCuatro; i++) {
            tituloo[i].classList.remove("black");
            tituloo[i].classList.add("white");
        }
        for (let i = 0; i < cantCursos; i++) {
            texto[i].classList.remove("black");
            texto[i].classList.add("white");
        }
        for (let i = 0; i < 3; i++) {
            subTitulos[i].style.color = "white";
        }
        modoo = "fondo-main";
    }else{
        document.getElementById("titulo").style.color="black";
        document.getElementById("i-sesion").style.color="black";
        header.style.backgroundColor="white";
        principal.classList.remove("fondo-main");
        principal.classList.add("blanco");
        document.getElementById("luna").style.display = "block";
        luna.style.color="rgb(41, 37, 37)";
        document.getElementById("sol").style.display = "none";
        document.getElementById("titulo-carrito").style.color = "black";
        document.getElementById("total").style.color = "black";
        document.getElementById("footer").style.backgroundColor = "rgb(228, 220, 220)";
        document.getElementById("carrito").style.backgroundColor = "rgb(228, 220, 220)";
        document.getElementById("persona").style.display="none";
        document.getElementById("persona2").style.display="block";
        for (let i = 0; i < cantCursos; i++) {
            cards[i].classList.remove("gris-oscuro");
            cards[i].classList.add("blanco-claro");
        }
        for (let i = 0; i < cantPorCuatro; i++) {
            tituloo[i].classList.remove("white");
            tituloo[i].classList.add("black");
        }
        for (let i = 0; i < cantCursos; i++) {
            texto[i].classList.remove("white");
            texto[i].classList.add("black");
        }
        for (let i = 0; i < 3; i++) {
            subTitulos[i].style.color = "black";
        }
        modoo = "blanco";
    }
}

function DarkWhiteMode() {
    boton.onclick = () =>{
        if (modoo === "fondo-main") {
            document.getElementById("titulo").style.color="black";
            document.getElementById("i-sesion").style.color="black";
            header.style.backgroundColor="white";
            principal.classList.remove("fondo-main");
            principal.classList.add("blanco");
            document.getElementById("luna").style.display = "block";
            luna.style.color="rgb(41, 37, 37)";
            document.getElementById("sol").style.display = "none";
            document.getElementById("titulo-carrito").style.color = "black";
            document.getElementById("total").style.color = "black";
            document.getElementById("footer").style.backgroundColor = "rgb(228, 220, 220)";
            document.getElementById("carrito").style.backgroundColor = "rgb(228, 220, 220)";
            document.getElementById("persona").style.display="none";
            document.getElementById("persona2").style.display="block";
            for (let i = 0; i < cantCursos; i++) {
                cards[i].classList.remove("gris-oscuro");
                cards[i].classList.add("blanco-claro");
            }
            for (let i = 0; i < cantPorCuatro; i++) {
                tituloo[i].classList.remove("white");
                tituloo[i].classList.add("black");
            }
            for (let i = 0; i < cantCursos; i++) {
                texto[i].classList.remove("white");
                texto[i].classList.add("black");
            }
            for (let i = 0; i < 3; i++) {
                subTitulos[i].style.color = "black";
            }
            let itemsCarro = document.querySelectorAll('td.cambio');
            console.log(cont * 3);
            for (let i = 0; i < cont * 3; i++) {
                if (itemsCarro[i] == null) {
                    console.log("esta vacio");
                }else{
                    itemsCarro[i].classList.remove("hola");
                    itemsCarro[i].classList.add("chau");
                }
            }
            modoo = "blanco";
        }else{
            document.getElementById("titulo").style.color="white";
            document.getElementById("i-sesion").style.color="white";
            header.style.backgroundColor="rgb(41, 37, 37)";
            principal.classList.remove("blanco");
            principal.classList.add("fondo-main");
            document.getElementById("sol").style.display = "block";
            document.getElementById("luna").style.display = "none";
            document.getElementById("titulo-carrito").style.color = "white";
            document.getElementById("total").style.color = "white";
            document.getElementById("footer").style.backgroundColor = "rgb(31, 29, 29)";
            document.getElementById("carrito").style.backgroundColor = "rgb(31, 29, 29)";
            document.getElementById("persona").style.display="block";
            document.getElementById("persona2").style.display="none";
            for (let i = 0; i < cantCursos; i++) {
                cards[i].classList.remove("blanco-claro");
                cards[i].classList.add("gris-oscuro");
            }
            for (let i = 0; i < cantPorCuatro; i++) {
                tituloo[i].classList.remove("black");
                tituloo[i].classList.add("white");
            }
            for (let i = 0; i < cantCursos; i++) {
                texto[i].classList.remove("black");
                texto[i].classList.add("white");
            }
            for (let i = 0; i < 3; i++) {
                subTitulos[i].style.color = "white";  
            }
            let itemsCarro = document.querySelectorAll('td.cambio');
            console.log(cont * 3);
            for (let i = 0; i < cont * 3; i++) {
                if (itemsCarro[i] == null) {
                    console.log("esta vacio");
                }else{
                    itemsCarro[i].classList.remove("chau");
                    itemsCarro[i].classList.add("hola");
                }
            }
            modoo = "fondo-main";
        }
        localStorage.setItem("modo", modoo);
    }
}

function traerDolar() {
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
    .then(respuesta => respuesta.json())
    .then( cotizaciones =>{
        const dolarBlue = cotizaciones.blue;
        dolarBluee = dolarBlue.value_buy
    })
}

function obtenerCursosJSON() {
    //no use este metodo con JSON pero lo dejo para demostrar que se como se hace
    //eleji agarrar del html con querySelectorAll
    const URLJSON = "/cursos.json";
    fetch(URLJSON)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos.cursos)
            ver = datos.cursos;
            console.log(ver);
            for (let i = 0; i < cantCursos; i++) {
                console.log(ver[i].id);
                //aca pondria todo en el html.
                /*document.getElementById("poner").innerHTML += `
                <div id="${ver[i].id}" class="card grid gris-oscuro" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title titulo-curso white">${ver[i].titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted bajar">Inicia: 25/11/2022</h6>
                    <h6 class="card-subtitle mb-2 text-muted bajar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg> 08:00 a 10:00Hs</h6>
                    <p class="card-text white">${ver[i].texto}</p>
                    <div class="horizontal">
                        <h5 class="card-title white">$</h5>
                        <h5 class="card-title white precio" id="uno">${ver[i].precio}</h5>
                        <h5 class="card-title white px">ARS</h5>
                    </div>
                    <div class="comprar-ahora">
                        <!--<a href=""><h6 class="boton">Comprar ahora</h6></a>-->
                        <button class="boton">Comprar ahora</button>
                    </div>
                    </div>
                </div>
                `;*/
            }
        })
}




