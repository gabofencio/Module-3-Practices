function contarFrutas() {
    console.log("Contando frutas con ciclo for:");
    let frutas = ['manzana', 'fresa', 'naranja', 'manzana', 'manzana', 'fresa', 'manzana', 'manzana', 'manzana'];

    let cantidadDeFrutas = {};
    for (let i = 0; i < frutas.length; i++) {
        {
            let fruta = frutas[i];
            if (cantidadDeFrutas[fruta]) {
                cantidadDeFrutas[fruta]++;
            } else {
                cantidadDeFrutas[fruta] = 1;
            }
        }
    }
    return console.log("Cantidad de frutas: ", cantidadDeFrutas);
}
contarFrutas();


function contarFrutasConWhile() {
    console.log("Contando frutas con ciclo while:");
    let frutas = ['manzana', 'fresa', 'naranja', 'manzana', 'manzana', 'fresa', 'manzana', 'fresa', 'manzana', 'pera', 'pera', 'pera', 'pera', 'pera', 'pera'];
    let cantidadDeFrutas = {};
    let i = 0;
    while (i < frutas.length) {
        let fruta = frutas[i];
        if (cantidadDeFrutas[fruta]) {
            cantidadDeFrutas[fruta]++;
        } else {
            cantidadDeFrutas[fruta] = 1;
        }
        i++;
    }
    return console.log("Cantidad de frutas: ", cantidadDeFrutas);
}
contarFrutasConWhile();