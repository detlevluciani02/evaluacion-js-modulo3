/**
 * COLLECTIONS - Script de Interacción
 */

function procesarSaludo() {
    const input = document.getElementById("nombreUsuario");
    const saludo = document.getElementById("mensajeSaludo");
    const info = document.getElementById("infoCaracteres");
    
    const nombre = input.value.trim();

    if (nombre === "") {
        saludo.textContent = "Error: Debes ingresar un nombre.";
        info.textContent = "Campo vacío detectado.";
    } else {
        saludo.textContent = `Hola, ${nombre}. ¡Listo para intercambiar!`;
        info.textContent = `Nombre registrado con ${nombre.length} caracteres.`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnSaludar").addEventListener("click", procesarSaludo);
});
