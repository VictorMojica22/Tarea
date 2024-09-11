// Convertir de pesos a dolares
export function getDollars(peso: number) {
    console.log(peso * 20);
}

getDollars(5);

// Area de un circulo
export function getAreaCircle(radio: number) {
    console.log( Math.PI * radio * radio );
}

getAreaCircle(5);

// Convertir de Celcius a Fahrenheit
export function getFahrenheit(celcius: number) {
    console.log(celcius * 9 / 5 + (32));
}

getFahrenheit(30);

// Obtener el area de un trapezoide
// 1.- Se dividio el trapezoide en dos triangulos y despues se saco el area por triangulo que la formula es b * h / 2
// 2.- Se suman las dos areas de los triangulos individuales dando el area total del trapezoide. 
export function getAreaTrapezoide(base1: number, altura1: number, base2: number, altura2: number) {
    let areaTriangulo1 = base1 * altura1 / 2;
    let areaTriangulo2 = base2 * altura2 / 2;
    let areaTrapezoide = areaTriangulo1 + areaTriangulo2;
    console.log(`Area de un Trapezoide: ${areaTrapezoide} cm2`);
}

getAreaTrapezoide(45, 24.5, 45, 23);


// Convertir de Fahrenheit a Celcius
export function getCelcius(fahrenheit: number) {
    console.log(fahrenheit - 32 * (5/9));
}

getCelcius(30);








