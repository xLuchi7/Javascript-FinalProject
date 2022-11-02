let boton = document.getElementById("mode");
let principal = document.getElementById("principal");
let modoo = localStorage.getItem("modo");
let luna  = document.getElementById("mode");
let sol = document.getElementById("sol");
let tituloo = document.querySelectorAll('h5.white');
let texto = document.querySelectorAll('p.white');
let cards = document.querySelectorAll('div.card');
let header = document.getElementById("header");

if (modoo === "fondo-main") {
    document.getElementById("titulo").style.color="white";
    document.getElementById("i-sesion").style.color="white";
    header.style.backgroundColor="rgb(41, 37, 37)";
    principal.classList.remove("blanco");
    principal.classList.add("fondo-main");
    document.getElementById("sol").style.display = "block";
    document.getElementById("luna").style.display = "none";
    for (let i = 0; i < 6; i++) {
        cards[i].classList.remove("blanco-claro");
        cards[i].classList.add("gris-oscuro");
    }
    for (let i = 0; i < 12; i++) {
        tituloo[i].classList.remove("black");
        tituloo[i].classList.add("white");
    }
    for (let i = 0; i < 6; i++) {
        texto[i].classList.remove("black");
        texto[i].classList.add("white");
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
    for (let i = 0; i < 6; i++) {
        cards[i].classList.remove("gris-oscuro");
        cards[i].classList.add("blanco-claro");
    }
    for (let i = 0; i < 12; i++) {
        tituloo[i].classList.remove("white");
        tituloo[i].classList.add("black");
    }
    for (let i = 0; i < 6; i++) {
        texto[i].classList.remove("white");
        texto[i].classList.add("black");
    }
    modoo = "blanco";
}

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
        for (let i = 0; i < 6; i++) {
            cards[i].classList.remove("gris-oscuro");
            cards[i].classList.add("blanco-claro");
        }
        for (let i = 0; i < 12; i++) {
            tituloo[i].classList.remove("white");
            tituloo[i].classList.add("black");
        }
        for (let i = 0; i < 6; i++) {
            texto[i].classList.remove("white");
            texto[i].classList.add("black");
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
        for (let i = 0; i < 6; i++) {
            cards[i].classList.remove("blanco-claro");
            cards[i].classList.add("gris-oscuro");
        }
        for (let i = 0; i < 12; i++) {
            tituloo[i].classList.remove("black");
            tituloo[i].classList.add("white");
        }
        for (let i = 0; i < 6; i++) {
            texto[i].classList.remove("black");
            texto[i].classList.add("white");
        }
        modoo = "fondo-main";
    }
    localStorage.setItem("modo", modoo);
}

//let carro = document.getElementById("carrito");
let botonn = document.querySelectorAll('button.boton');
let numero;
let producto;
let descuento = -20;
//probar
let cant = 0;
let precio;
precio = parseInt(document.getElementById('uno').innerText);
console.log(precio);
precio = precio - 20;
console.log(precio);

let precioo = [];

for (let i = 0; i < 6; i++) {
    precioo[i] = parseInt(document.querySelectorAll('h5.precio').innerText);
    console.log(precioo[i]); 
}

for (let i = 0; i < 6; i++) {
    botonn[i].onclick = () =>{
        numero = i + 1;
        producto = document.getElementById(""+numero);
        cant = cant + 1;
        descuento = descuento + 20;
        if (numero == 1) {
            nuevo = document.getElementById("carrito").innerHTML += `
            <tr>
                <td>Curso JavaScript</td>
                <td>${descuento}%</td>
                <td>$30.000</td>
            </tr>
            `;  
        }
        if (numero == 2) {
            nuevo = document.getElementById("carrito").innerHTML += `
            <tr>
                <td>Curso HTML + CSS</td>
                <td>${descuento}%</td>
                <td>$30.000</td>
            </tr>
            `;  
        }
        if (numero == 3) {
            nuevo = document.getElementById("carrito").innerHTML += `
            <tr>
                <td>Curso React</td>
                <td>${descuento}%</td>
                <td>$30.000</td>
            </tr>
            `;  
        }
        if (numero == 4) {
            nuevo = document.getElementById("carrito").innerHTML += `
            <tr>
                <td>Curso C++</td>
                <td>${descuento}%</td>
                <td>$30.000</td>
            </tr>
            `;  
        }
        if (numero == 5) {
            nuevo = document.getElementById("carrito").innerHTML += `
            <tr>
                <td>Curso Python</td>
                <td>${descuento}%</td>
                <td>$30.000</td>
            </tr>
            `;  
        }
        if (numero == 6) {
            nuevo = document.getElementById("carrito").innerHTML += `
            <tr>
                <td>Curso java</td>
                <td>${descuento}%</td>
                <td>$30.000</td>
            </tr>
            `;  
        }
        console.log(numero);
        console.log(producto);
        let prueba = document.getElementById("prueba");
        //prueba.inputMode += ""+producto;
    }
}