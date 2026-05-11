let librosLeidos = ["El Quijote", "la Metamorfosis", "La Sombra del Viento"];
function agregarLibro(libros) {
    librosLeidos.push(libros);
}
function mostrarLibrosLeidos() {
    console.log("Libros en la biblioteca:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}
agregarLibro("Cancion de hielo y fuego");
agregarLibro("El señor de los anillos");
agregarLibro("Harry Potter y la piedra filosofal");
mostrarLibrosLeidos();