// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo () {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert('Nombre inválido');
    } else {
        listaNombres.push(nombre);
    }
}

function mostrarLista () {

}