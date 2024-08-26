// operaciones.js
const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    // Leer el contenido actual del archivo citas.json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    // Crear un nuevo objeto de cita
    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    };

    // Agregar la nueva cita al arreglo de citas
    citas.push(nuevaCita);

    // Guardar el arreglo actualizado en el archivo citas.json
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));

    console.log('Nueva cita registrada con éxito.');
}

function leer() {
    // Leer el contenido del archivo citas.json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    // Mostrar todas las citas en la consola
    console.log('Citas registradas:');
    console.log(citas);
}

// Exportar las funciones para usarlas en otros archivos
module.exports = {
    registrar,
    leer
};
