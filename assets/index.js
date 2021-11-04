// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//----------------------------------------------------------------------------------------
// Ejercicio 1: Ordenar array de menor a mayor

// Primero hacemos la función para limpiar los arrays, tanto numericos como de string
function cleanArray(array) {
  
    for (let index = 0; index < array.length; index++){
       
        if (typeof array[index] !== 'string' && typeof array[index] !== 'number'){
            // elimina el valor del array ya que no cumple los requisitos
            array.splice(index,1);
            index--; // volvemos a disminir el índice para que no se salte el siguiente
         }
    }
  return array;
  }

// Funcion para el ordenamiento de minimo a maximo o vicerversa en función del tipo de opertaion '<' o bien '>'
  function bubbleSort(array, operation) {
    
    array = cleanArray(array); 

   
        for(let i=0; i<array.length; i++){

            for(let j=0; j<i; j++){ // A la vez que recorremos comprobamos los anteriores por si uno es menor que otro
                
                if (operation == '<'){

                    if(array[i] < array[j]){ // Miramos los anteriores por si ha habido un cambio

                        let correction = array[i]; // Las posiciones tiene que invertirse si se quiere ordenar
                        array[i] = array[j];
                        array[j] = correction;
                    }
                }
                else if(operation == '>'){

                    if(array[i] >= array[j]){ // Miramos los anteriores por si ha habido un cambio

                        let correction = array[i]; // hay que invertir las posiciones para el ordenamiento
                        array[i] = array[j];
                        array[j] = correction;
                    }

                }
            }

        }
    

    return array;
  }

  

 console.log(bubbleSort(sequence, '>'))

//-----------------------------------------------------------------------

// Ejercicio 3: Calcular la media aritmética de los datos del array sequence

// Funcion que calcule la media aritmetica de los datos del array sequence

function aritmeticMean(array, acumuSum) {
    
    let mean=0; 
    // La media aritmética es la suma total de los elementos entre el número de elementos

    // Primero limpiamos el array
    array = cleanArray(array); 

    // Recorremos los valores y los vamos acumulando en la suma
    mean = acumuSum(array);

    mean = mean/(array.length);

    return mean;
}

// Función para suma acumulativa de la media
function acumulativeSum(array) {
    let sum=0;
    for (let value of array){
        sum = sum + value;
    }
return sum;
}

//console.log(aritmeticMean(sequence,acumulativeSum))

//-------------------------------------------------------------------------

// Ejercicio 4 : Comprobación que DNI y letra del mismo son correctos

// Función para comprobar si el dni y la letra introducidos son correctos en base a un array de letras y al cálculo de la misma con el DNI

function checkDNI(DNI, userLetter, array,restAndLetter,uxInf) {
    
    // Primero se limpia el array, por si no hay números
    array = cleanArray(array); 

    // El usuario debe indicar un número de DNI y debemos almacenarlo en una variable ¿PODRIA HACERSE ASI?
   // let DNI = prompt("Enter your DNI without letter: ");
   // let userLetter = prompt("Enter your DNI's letter: ");
    let letter="";
    let resto;

    if(DNI > 0 && DNI < 99999999){ // si el numero es valido se calcula la letra según el valor

        letter = restAndLetter(resto,DNI, array); // Calculamos el resto y encontramos la letra por el valor del resultado

        uxInf(letter,userLetter);
    }
    else{
        console.log("The number is incorrect.")
    }

return DNI;
}

// Funcion que muestra los mensajes al usuario y comprueba que la letra y el numero sean correctos
function userInfo(letter, userLetter) {
    
    if(letter == userLetter){
        console.log("El número y letra indicados son correctos.");
    }
    else{
        console.log("La letra introducida no es correcta.");
    }
    return ;
}

// Funcion que hace el resto y busca la letra según el valor del resto
function restAndLetterCalc(rest,DNI,array) {
    
    rest = DNI%23;
        for (let index in array){
            
            if(index == rest){ // si el indice coincide con el resto de la división es porque es la letra buscada
                letter = array[index];
            }
            else{

            }
        }
    return letter;
}

//console.log(checkDNI(49032712, "R", letrasDNI,restAndLetterCalc,userInfo))