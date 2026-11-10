// Arreglo de estudiantes proporcionado
const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 }
];

// Función que recibe el ID y retorna una Promesa
const buscarEstudiantePorId = (idBuscado) => {
    return new Promise((resolve, reject) => {
        // Simulamos un pequeño retraso asíncrono (opcional, pero buena práctica)
        setTimeout(() => {
            const estudianteEncontrado = estudiantes.find(est => est.id === idBuscado);

            if (estudianteEncontrado) {
                resolve(estudianteEncontrado);
            } else {
                reject(`Error: No existe un estudiante con el id ${idBuscado}.`);
            }
        }, 300);
    });
};

// --- Ejemplo de Ejecución solicitada usando .then() y .catch() ---

console.log("--- Búsqueda del estudiante con ID 2 ---");
buscarEstudiantePorId(2)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });

console.log("--- Búsqueda del estudiante con ID 1 ---");
buscarEstudiantePorId(1)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });

console.log("--- Búsqueda del estudiante con ID 10 ---");
buscarEstudiantePorId(10)
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.error(error);
    });


// Opcional: Mostrar la lista en el DOM de la página web
document.addEventListener("DOMContentLoaded", () => {
    const listaUl = document.getElementById("lista-estudiantes");
    estudiantes.forEach(est => {
        const li = document.createElement("li");
        li.textContent = `ID: ${est.id} | Nombre: ${est.nombre} | Edad: ${est.edad}`;
        listaUl.appendChild(li);
    });
});