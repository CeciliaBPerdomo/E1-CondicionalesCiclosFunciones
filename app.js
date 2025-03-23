// Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function verificarParImpar() {
    let numero = parseInt(prompt("Ingresa un número:"));
    console.log("Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.")

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
    } else if (numero % 2 === 0) {
        alert(`${numero} es par`);
        console.log(`${numero} es par`);
    } else {
        alert(`${numero} es impar`);
        console.log(`${numero} es impar`);
    }
    console.log("--------------------------------------------------");
}

// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales

function compararNumeros() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    console.log("Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales");
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, ingresa números válidos.");
    } else if (num1 > num2) {
        alert(`${num1} es mayor que ${num2}`);
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        alert(`${num2} es mayor que ${num1}`);
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        alert(`${num1} y ${num2} son iguales`);
        console.log(`${num1} y ${num2} son iguales`);
    }

    console.log("------------------------------------------------");
}

// Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5
function verificarMultiploDe5() {
    let numero = parseInt(prompt("Ingresa un número:"));
    console.log("Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5");

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        console.log("Entrada no válida.");
    } else if (numero % 5 === 0) {
        alert(`${numero} es múltiplo de 5`);
        console.log(`${numero} es múltiplo de 5`);
    } else {
        alert(`${numero} no es múltiplo de 5`);
        console.log(`${numero} no es múltiplo de 5`);
    }

    console.log("------------------------------------------------");
}


// Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumerosHasta() {
    let num = parseInt(prompt("Ingresa un número:"));
    console.log("Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.");

    if (isNaN(num)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        for (let i = 0; i <= num; i++) {
            console.log(i);
        }
    }

    console.log("------------------------------------------------");
}


// Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabraVez() {
    let palabra = prompt("Ingresa una palabra:");
    let veces = parseInt(prompt("Ingresa cuántas veces deseas imprimir la palabra:"));

    console.log("Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.");

    if (isNaN(veces)) {
        alert("Por favor, ingresa un número válido.");
        console.log("Entrada no válida.");
    } else {
        for (let i = 0; i < veces; i++) {
            console.log(palabra);
        }
        alert(`La palabra '${palabra}' fue impresa ${veces} veces.`);
    }

    console.log("------------------------------------------------")
}

// Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. 
function imprimirArray(array) {
    console.log("Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.");
    array.forEach(valor => {
        console.log(valor);
    });
    console.log("------------------------------------------------");
}

// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
function imprimirArraySinQuinto(array) {
    console.log("Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.");
    if (array.length === 10) {
        for (let i = 0; i < array.length; i++) {
            if (i !== 4) {  // La 5ta posición corresponde al índice 4 (empezando desde 0)
                console.log(array[i]);
            }
        }
    } else {
        console.log("El array debe contener exactamente 10 elementos.");
    }
    console.log("------------------------------------------------");
}

// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function multiplicarArrayPorNumero(array, numero) {
    console.log("Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.");

    console.log("Los números del array son:", array, "y el número por el que se multiplicarán es:", numero);

    array.forEach(valor => {
        console.log(valor * numero);
    });

    console.log("------------------------------------------------");
    console.log("Fin de los ejercicios, yeah!")
}


// Llamada a la funciones
verificarParImpar();
compararNumeros();
verificarMultiploDe5();
imprimirNumerosHasta();
imprimirPalabraVez();
imprimirArray(["hola", "mundo", "desde", "Colonia", "del", "Sacramento"]);
imprimirArraySinQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
multiplicarArrayPorNumero([1, 2, 3, 4, 5], 3);