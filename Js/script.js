/**
 * Autor: Torres Rocha Luis
 * Fecha: 19 Octubre -2023
 */

var btnJugar = document.getElementById("btnJugar");
var btnNuevoJ = document.getElementById("btnNuevoJuego");
var btnSalirJ = document.getElementById("btnSalirJuego");
var txtApuesta = document.getElementById("txtApuesta");
var resultado = document.getElementById("resultado");
var lblCapital = document.getElementById("lblCapital");
var txtNombre = document.getElementById("txtNombre");
var txtCapital = document.getElementById("txtCapital");
var lblNombre = document.getElementById("lblNombre");
var imgDado1 = document.getElementById("dado1");
var imgDado2 = document.getElementById("dado2");
var lblDado1 = document.getElementById("valor1");
var lblDado2 = document.getElementById("valor2");
var sumaDados = 0;
var tipoJugada= "";
var capital = 0;

function mostrarContenido() {
    if(txtNombre.value != "" && txtCapital.value != ""){
        var contenidoNombre = document.getElementById("nombre");
        var contenidoJuego = document.getElementById("contenedor-juego");

        contenidoNombre.style.opacity = '0';
        contenidoNombre.style.transform = 'translateY(20px)';
        capital = parseFloat(txtCapital.value);
        lblCapital.textContent = capital;
        lblNombre.textContent = txtNombre.value;

        setTimeout(function() {
        contenidoNombre.style.display = 'none';
        contenidoJuego.style.display = 'block';
        }, 500);
    }
    else{
        alert('Ingrese nombre y capital del jugador');
    }
}

function btnJugada(){
    if (txtApuesta.value == ""){
        alert('Ingrese una apuesta');
    }
    else { 
        apuesta = parseFloat(txtApuesta.value); 
        if (capital == 0){
            alert('No tienes suficiente dinero para apostar');
            btnJugar.disabled=true;
            btnNuevoJ.disabled=true;
        }
        else if(apuesta > capital){
            alert("La apuesta no puede ser mayor al capital");
            btnJugar.disabled=true;
            btnNuevoJ.disabled=false;
        }else{
            var jugadaSeleccionada = document.getElementById("sltJugada").value;
            var nombre = txtNombre.value;
            jugadaSeleccionada.disabled= true;
            btnJugar.disabled=true;
            btnNuevoJ.disabled=false;
            txtApuesta.disabled=true;
            var dado1 = Math.floor(Math.random() * 6) + 1;
            var dado2 = Math.floor(Math.random() * 6) + 1;
            imgDado1.src="Images/dado"+dado1+".jpg";
            imgDado2.src="Images/dado"+dado2+".jpg";
            lblDado1.textContent = dado1;
            lblDado2.textContent = dado2;
            sumaDados = dado1+dado2;
            tJugada();
            if(tipoJugada == jugadaSeleccionada){
                capital = capital+apuesta;
                resultado.textContent +=  `La suma de los dados es: ${sumaDados} jugador ${nombre} gano ${apuesta} obteniendo un capital ${capital}` ;
            }else{
                capital = capital-apuesta;
                resultado.textContent +=  `La suma de los dados es: ${sumaDados} jugador ${nombre} perdio ${apuesta} obteniendo un capital ${capital}` ;
            }
        }
    }
}

function btnNuevo(){
    lblCapital.textContent = capital;
    resultado.textContent = "";
    txtApuesta.value = "";
    imgDado1.src ="";
    imgDado2.src ="";
    btnNuevoJ.disabled=true;
    btnJugar.disabled=false;
    txtApuesta.disabled=false;
    jugadaSeleccionada = false;
}

function tJugada(){
    if(sumaDados>7){ tipoJugada = "La suma de los dados será mayor a 7"; }
    else if(sumaDados<7){ tipoJugada = "La suma de los dados será menor a 7"; }
    if(sumaDados==7){ tipoJugada = "La suma de los dados será igual a 7"; }
}

function btnSalir() {
    txtNombre.value = "";
    txtCapital.value = "";
    var contenidoNombre = document.getElementById("nombre");
    var contenidoJuego = document.getElementById("contenedor-juego");

    contenidoNombre.style.display = 'block';
    contenidoJuego.style.display = 'none';

    setTimeout(function() {
      contenidoNombre.style.opacity = '1';
      contenidoNombre.style.transform = 'translateY(0)';
    }, 100);
    
    lblNombre.textContent = "";
    lblCapital.textContent += capital;
}