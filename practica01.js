let frutas = ["manzana", "banana", "Naranja"];
console.log(frutas); 

// Eliminar el último elemento
frutas.pop();

// Imprimirlo en consola
console.log(frutas);


// 2. Iterar con forEach
let numeros = [1, 2, 3, 4, 5, 6];

// Corregido: 'forEach' lleva 'E' minúscula y se corrigió la errata de escritura
numeros.forEach(numero => console.log(numero));


// 3. Multiplicar con map
let numeros2 = [1, 2, 3, 4, 5, 6];

// Corregido: nombre de la variable 'numeros2'
const multiplo_5 = numeros2.map((numero) => numero * 5);
console.log(multiplo_5);


// 4. Filtrar números pares con filter
let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros3.filter((numero) => numero % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]


// 5. Encontrar elemento con find
let numeros4 = [10, 20, 30, 40, 50, 60];

const mayorA45 = numeros4.find((numero) => numero > 45);
console.log(mayorA45); 


// 6. Verificar existencia con includes
let frutas2 = ["manzana", "banana", "naranja"];

const existeNaranja = frutas2.includes("naranja");
console.log(existeNaranja); // true


// 7. Extraer subarray con slice
let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Los índices son del 1 (incluido) al 4 (excluido) para obtener [2, 3, 4]
const subArreglo = numeros5.slice(1, 4);
console.log(subArreglo); // [2, 3, 4]


// 8. Sumar elementos con reduce
let numeros6 = [1, 2, 3, 4];

const sumaTotal = numeros6.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(sumaTotal); 