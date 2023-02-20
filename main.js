//VARIABLES

/*Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente
Comenta el código que muestra el cuadro de diálogo*/
//alert(“JavaScript funcionando correctamente”);

//Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

//Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;

//Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;

//Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI * 2;

//Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = 'jose';

//Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 1;

//Crea una variable de tipo booleano
let miBooleano = true;

//Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length);

//Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav)

//Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`)

//Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
let crackJS = 'Seré un crack en JavaScript al terminar el bootcamp'
console.log(crackJS.toUpperCase());

//Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
let crack = 'Hola soy un crack';
console.log(crack.substring(0, 5));

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
const miNumeroFavString = miNumeroFav.toString();
console.log(miNumeroFavString);
console.log(typeof miNumeroFavString);

//Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.
let variable = 4;
let likeVariable = `me gusta el numero ${variable}`;
console.log(likeVariable);

//Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(PI.toFixed(2));

//ARRAYS

//Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = [];

//Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8];

//Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ['Hola','Mundo'];

//Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays =  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length);

//Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push(77);
console.log(loGuardoTodo);

//Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1]);

//Añade el string ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.push('Eulario');
console.log(loGuardoTodo);

//OBJETOS

//Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
 let coche = {
    marca: 'Toyota',
    modelo: 'Auris',
    matricula: '1234ABC'
 };

//Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
let casa = {
    codPostal: 46103,
    calle: 'Joaquin Sabina',
    portal: 4,
    piso: 3
};

//Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)
let FullStackDeveloper = {
    'array lenguajes': ['javascript', 'php'],
    'array proyectos': ['mi página personal',  'mi empresa']
};

//Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
let perro = {
    nombre: 'toby',
    raza: 'podenco',
    color: 'marron',
    edad: 4
};

//Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
let noticia = {
    titular: 'detenido',
    cuerpo: 'trafico de drogas',
}

//Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
let persona = {
    nombre: 'Jose',
    apellido: 'Llanas',
    edad: 36
};

//Muestra por consola el nombre de la variable Persona
console.log(persona.nombre);

//Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(FullStackDeveloper['array lenguajes'][0]);

//Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
let portatil = {
    marca: 'asus'
}
console.log(portatil.marca);

//Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(portatil['marca']);

//Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
let concierto = {
    grupos:[]
}
console.log(concierto.grupos);

//Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola.
let led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul'
};

let RGB = [led.lampara1, led.lampara2, led.lampara3]
console.log(RGB);

//Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
let O_Error = {
    codigo: 'error'
}
console.log(O_Error.codigo);

//Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes
let grupo = {
    integrantes: ['Joan', 'Jose', 'Vlad']
};
let integrantes = grupo.integrantes[2];
console.log(integrantes);

//Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
let impresora = {
    tinta: {
        rojo: 'medio',
        verde: 'bajo',
        azul: 'alto'
    },
};
let nivelesTinta = [impresora.tinta.rojo, impresora.tinta.verde, impresora.tinta.azul];
console.log('los niveles de tinta de los colores rojo, verde y azul son ' + nivelesTinta + ' respectivamente');

//Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
let movil = {
    especificaciones: "12 GB RAM"
};
let especificaciones = movil["especificaciones"];
console.log(especificaciones);

//Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
portatil.marca = 'MSI';
console.log(portatil);

//Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
concierto.grupos.push('Guns N\' Roses');
console.log(concierto.grupos);

//Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado
concierto.fecha = 'Abril 2023';
concierto.fecha = new Date();
console.log(concierto);

//Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
grupo.integrantes.pop([2]);
console.log(grupo.integrantes.length);

