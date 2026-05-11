function clasificadorDeEdad() {
    let edad = 10;
    if (edad > 0 && edad <= 12) {
        console.log("Eres un niño");
    } else if (edad >= 13 && edad <= 17) {
        console.log("Eres un adolescente");
    }
    else if (edad >= 18 && edad <= 60) {
        console.log("Eres un adulto");
    }
    else {
        console.log("adulto mayor");
    }
}
clasificadorDeEdad();


function determinadorDeNumeroMayor() {
    let n1 = 10;
    let n2 = 15;
    let n3 = 10;
    if (n1 > n3 && n1 > n2) {
        console.log("El número mayor es: " + n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log("El número mayor es: " + n2);
    } else {
        console.log("El número mayor es: " + n3);
    }
}


determinadorDeNumeroMayor();

function determinadorDeTriangulo() {
    let l1 = 10;
    let l2 = 10;
    let l3 = 10;
    if (l1 === l2 && l2 === l3) {
        console.log("El triángulo es equilátero");
    } else if (l1 === l2 || l2 === l3 || l1 === l3) {
        console.log("El triángulo es isósceles");
    } else {
        console.log("El triángulo es escaleno");
    }
}
determinadorDeTriangulo();




function login(){
    let usuario = "admin";
    let contraseña = "PesoplumitaJunior";
    if (usuario === "admin" && contraseña === "PesoplumitaJunior") {
        console.log("Inicio de sesión exitoso");
    } else {
        console.log("Nombre de usuario o contraseña incorrectos");
    }
}
login();

//clase 4/28
//algoritmo que imprima numeros pares, del 0 al 20
function imprimirPares() {
    console.log("Numeros pares");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
imprimirPares();
//ciclo que sea la tabla de multiplicar de 8
function tablaDeMultiplicar(n) {
    console.log("Tablas de multiplicar");
    for (let i = 1; i <= 10; i++) {
        let resultado = n * i;
        console.log(n + " x " + i + " = " + resultado);
    }
}
tablaDeMultiplicar(8);

//mostrar el cuadrado del 1 al 10
function cuadrados(n) {
    for (let i = 1; i <= n; i++) {
        let resultado = i * i;
        console.log(i + "^2=" + resultado);
    }
}
cuadrados(10);
//factorial de un numero
function factorial(n) {
    console.log("Factorial del numero " + n + " Es:");
    let sumatoria = 1;
    for (let i = 1; i <= n; i++) {
        sumatoria = sumatoria * i;
    }
    return sumatoria;
}
console.log(factorial(15));


//piramide con * invertida
function piramideInvertida(n) {
    console.log("Piramide");
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
piramideInvertida(10);


//area de triangulo
function areaTrianngulo(base, altura) {
    console.log("Area del triangulo");
    console.log("El area de un triangulo con base " + base + " y altura " + altura + " es: ");
    let area = (base * altura) / 2;
    return area;
}
console.log(areaTrianngulo(15, 5));

//multiplicador de 3 numeros
function multiplicador(x, y, z) {
    console.log("Multiplicacion de 3 numeros");
    console.log("El resultado de " + x + " * " + y + " * " + z + " es:");
    let multiplicacion = x * y * z;
    return multiplicacion;
}
console.log(multiplicador(5, 3, 2));

//calculo de division
function division(x, y) {
    console.log("Division de 2 numeros");
    console.log("El resultado de " + x + " / " + y + " es:");
    if (y === 0 || x === 0) {
        return "Error: No se puede dividir por cero";
    }
    return x / y;
}
console.log(division(10, 2));

//funcion que determine si un numero es par o impar
function paroNon(n) {
    console.log("Determinar si el numero " + n + " es par o impar");
    if (n % 2 === 0) {
        return "El numero " + n + " es par";
    }
    else {
        return "El numero " + n + " es impar";
    }

}

//cajero automatico consulta, deposito, retiro
function cajeroAutomatico(opcion) {
    console.log("Cajero automatico de la bodega aurrera");
    let saldo = 1000;
    console.log("Seleccione una opcion: 1. Consulta de saldo 2. Deposito 3. Retiro");
    switch (opcion) {
        case "1":
            console.log("Su saldo actual es: " + saldo);
            break;
        case "2":
            break;
        case "3":
            break;
        default:
            alert("Opcion invalida. Por favor seleccione una opcion del 1 al 3.");
            break;
    }
}


function cuenta(){
    let x = 10;
    let y=3;
    let residuo = x % y;
    console.log("El residuo de " + x + " % " + y + " es: " + residuo);
}
cuenta();
console.log(0 === false);

let i = 0; while (i < 3) { console.log(i); i++; }
let suma = 0; let numero = 1; while (suma < 5) { suma += numero; numero++; } console.log(suma);

for (let i = 0; i < 3; i++) { console.log("Hola"); }
let suma = 0; for (let i = 1; i <= 5; i++) { suma += i; } console.log(suma);

let frutas = ['manzana', 'fresa', 'naranja'];
console.log(frutas[2]);

let colores = ['rojo', 'verde', 'azul'];
colores[1] = 'amarillo';
console.log(colores);




//P00
const persona = {
    nombre: 'Ivan',
    edad: 24,
    nacionalidad: 'Mexicano',
    altura: 1.75,
    sexo: 'hombre',
    direccion:{
        ciudad: 'Cdmx',
        colonia: 'del valle'
    },
    materias: ['Base de datos', 'Matematicas', 'Programacion II'],
    saludar(){
        console.log('Hola mis materias ' + this.materias);
    }
}

function Direccion(ciudad, colonia){
    this.ciudad = ciudad,
    this.colonia = colonia
}

function Persona(nombre, edad, altura, sexo, ciudad, colonia){
    this.nombre = nombre,
    this.edad = edad,
    this.altura = altura,
    this.sexo = sexo,

    this.direccion = new Direccion(ciudad, colonia)

    this.saludar = function(){
        console.log('Hola soy ' + this.nombre);
    }
}

let natalia = new Persona('Natalia', 20, 1.70, 'mujer', 'cdmx', 'napoles')
console.log(natalia);

let joseph = new Persona('Joseph', 20)
joseph.saludar()

persona.saludar()
console.log(persona.materias[0]);
//Añadiendo atributos
persona.email = 'ivan.garcia@gmail.com'
console.log(persona);

for (const propiedad in persona) {
    console.log(propiedad + ":" + persona[propiedad]);
}

delete persona.materias
console.log(persona);

const alumno = {
    nombre: 'Jesus Rodrigo',
    edad: 26,
    status: 'reprobado'
}

const json = JSON.stringify(alumno)
console.log(json);

const objeto = JSON.parse(json)
console.log(objeto);

let array = ['mango', 'manzana', 'uva']
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

for (const element of array) {
    console.log(element);
}

array.forEach(element => {
    console.log(element);
});




