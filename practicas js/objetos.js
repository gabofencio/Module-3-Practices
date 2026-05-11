
let libro = {
    titulo: "",
    autor: "",
    añoPublicacion: 0,
    estado: "",
    capitulos: []
}

function crearLibro(titulo, autor, añoPublicacion, estado) {
    libro.titulo = titulo;
    libro.autor = autor;
    libro.añoPublicacion = añoPublicacion;
    libro.estado = estado;
    return console.log("Libro creado.");
    coleccionDeLibros.push(libro);
}
function agregarCapitulo(tituloCapitulo) {
    libro.capitulos.push(tituloCapitulo);
}

function eliminarCapitulo(tituloCapitulo) {
    let indice = libro.capitulos.indexOf(tituloCapitulo);
    if (indice !== -1) {
        libro.capitulos.splice(indice, 1);
        console.log("Capítulo eliminado: " + tituloCapitulo);
    }
    else {
        console.log("Capítulo no encontrado: " + tituloCapitulo);
    }

}
function mostrarCapitulos() {
    console.log("Capítulos del libro " + libro.titulo + ":");
    for (let i = 0; i < libro.capitulos.length; i++) {
        console.log("- " + libro.capitulos[i]);
    }
}

function informacionDelLibro() {
    return console.log("Libro titulado: " + libro.titulo + ", escrito por " + libro.autor + ", en el año " + libro.añoPublicacion + ", su estado es: " + libro.estado);
}

crearLibro("la metamorfosis", "Franz Kafka", 1915, "prestado");
agregarCapitulo("Capítulo 1");
agregarCapitulo("Capítulo 2");
agregarCapitulo("Capítulo 3");
informacionDelLibro();
mostrarCapitulos();
eliminarCapitulo("Capítulo 2");
eliminarCapitulo("wawa");
mostrarCapitulos();