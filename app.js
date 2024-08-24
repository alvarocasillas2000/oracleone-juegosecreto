let numeroSecreto = 0; // Número secreto
let intentos = 0; // Contador de intentos
let listaNumerosSorteados = []; // Lista de números sorteados
let numeroMaximo = 10; // Número máximo

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Selecciona el elemento HTML
    elementoHTML.innerHTML = texto; // Asigna el texto al elemento HTML
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Obtiene el valor del input
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);  // Asigna el texto al elemento p
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita el botón de reiniciar
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); // Limpia el input
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; // Limpia el input
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSorteados.length === numeroMaximo){ // Si ya se sortearon todos los números, se reinicia la lista
        //listaNumerosSorteados = [];
        asignarTextoElemento('p', 'Se sortearon todos los números, recarga la página para volver a jugar');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();// Si el número ya fue sorteado, se vuelve a llamar a la función
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;// Si el número no fue sorteado, se retorna
        }
    }
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto'); // Asigna el texto al elemento h1
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); // Asigna el texto al elemento p
    numeroSecreto = generarNumeroSecreto(); // Genera un número secreto
    intentos = 1; // Reinicia el contador de intentos
}

function reiniciarJuego(){
    limpiarCaja()
    condicionesIniciales(); // Muestra los mensajes iniciales
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // Deshabilita el botón de reiniciar
}

condicionesIniciales(); // Muestra los mensajes iniciales